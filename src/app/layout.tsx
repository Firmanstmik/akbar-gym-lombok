import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { SITE } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Akbar Gym | Fitness & Training in South Lombok",
    template: "%s · Akbar Gym",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Akbar Gym",
    "gym South Lombok",
    "fitness Sengkol",
    "gym Praya",
    "Kuta Mandalika gym",
    "personal training Lombok",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: "Akbar Gym | Fitness & Training in South Lombok",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Gym | Fitness & Training in South Lombok",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#E86324",
  width: "device-width",
  initialScale: 1,
};

const STRIP_EXTENSION_ATTRS = `(function(){
  var blocked={bis_skin_checked:1,bis_register:1,"cz-shortcut-listen":1};
  function isBlocked(name){return !!blocked[String(name).toLowerCase()]}
  var sa=Element.prototype.setAttribute;
  Element.prototype.setAttribute=function(name,value){
    if(isBlocked(name))return;
    return sa.call(this,name,value);
  };
  var sans=Element.prototype.setAttributeNS;
  Element.prototype.setAttributeNS=function(ns,name,value){
    if(isBlocked(name))return;
    return sans.call(this,ns,name,value);
  };
  var san=Element.prototype.setAttributeNode;
  if(san){
    Element.prototype.setAttributeNode=function(attr){
      if(attr&&isBlocked(attr.name))return attr;
      return san.call(this,attr);
    };
  }
  Object.keys(blocked).forEach(function(key){
    try{
      Object.defineProperty(Element.prototype,key,{
        configurable:true,
        enumerable:false,
        get:function(){return null},
        set:function(){}
      });
    }catch(e){}
  });
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: STRIP_EXTENSION_ATTRS }} />
      </head>
      <body className="min-h-full bg-white font-sans text-ink" suppressHydrationWarning>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
