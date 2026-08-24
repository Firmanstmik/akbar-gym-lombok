const BLOCKED_ATTRS = ["bis_skin_checked", "bis_register", "cz-shortcut-listen"];

function isBlocked(name: string) {
  return BLOCKED_ATTRS.includes(name.toLowerCase());
}

function stripNode(node: Node | null) {
  if (!node || node.nodeType !== 1) return;
  const el = node as Element;
  for (const attr of BLOCKED_ATTRS) {
    if (el.hasAttribute(attr)) el.removeAttribute(attr);
  }
}

function stripTree(root: ParentNode | Document | Element = document.documentElement) {
  stripNode(root as Node);
  const scoped = root as ParentNode;
  if (!scoped.querySelectorAll) return;
  for (const attr of BLOCKED_ATTRS) {
    scoped.querySelectorAll(`[${attr}]`).forEach((el) => el.removeAttribute(attr));
  }
}

const setAttribute = Element.prototype.setAttribute;
Element.prototype.setAttribute = function (name: string, value: string) {
  if (isBlocked(name)) return;
  return setAttribute.call(this, name, value);
};

const setAttributeNS = Element.prototype.setAttributeNS;
Element.prototype.setAttributeNS = function (ns: string | null, name: string, value: string) {
  if (isBlocked(name)) return;
  return setAttributeNS.call(this, ns, name, value);
};

stripTree();

const originalError = console.error.bind(console);
console.error = (...args: unknown[]) => {
  const text = args
    .map((arg) => {
      if (typeof arg === "string") return arg;
      if (arg instanceof Error) return `${arg.name} ${arg.message} ${arg.stack ?? ""}`;
      try {
        return JSON.stringify(arg);
      } catch {
        return String(arg);
      }
    })
    .join(" ");

  if (
    text.includes("bis_skin_checked") ||
    text.includes("bis_register") ||
    text.includes("cz-shortcut-listen") ||
    (text.includes("hydrated") && text.includes("server rendered HTML"))
  ) {
    return;
  }

  originalError(...args);
};

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes") {
      stripNode(mutation.target);
    }
    mutation.addedNodes.forEach((node) => {
      stripNode(node);
      if (node instanceof Element) stripTree(node);
    });
  }
});

observer.observe(document.documentElement, {
  subtree: true,
  childList: true,
  attributes: true,
  attributeFilter: BLOCKED_ATTRS,
});
