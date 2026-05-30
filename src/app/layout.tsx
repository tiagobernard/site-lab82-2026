import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import WaFloat from "@/components/wa-float";
import ReduxProvider from "@/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lab82.dev"),
  title: {
    default: "Lab82: Agência Digital",
    template: "%s | Lab82",
  },
  description: "Agência digital especializada em desenvolvimento WordPress, hospedagem de alta performance e manutenção de sites. Mais de 300 projetos entregues.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Lab82",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lab82",
  url: "https://lab82.dev",
  description: "Agência digital especializada em desenvolvimento WordPress, hospedagem de alta performance e manutenção de sites.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-31-99840-7238",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full antialiased dark",
        inter.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="bg-[#0A1628] text-[#CDD6E4] min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReduxProvider>
          <Nav />
          <div className="flex-1">
            <div aria-hidden="true" style={{ height: 64, flexShrink: 0 }} />
            {children}
          </div>
          <Footer />
          <WaFloat />
        </ReduxProvider>
      </body>
    </html>
  );
}
