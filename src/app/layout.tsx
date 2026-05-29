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
  title: "lab82 — agência digital",
  description: "Agência digital especializada em desenvolvimento web, WordPress, hospedagem de alta performance e manutenção.",
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
        <ReduxProvider>
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
          <WaFloat />
        </ReduxProvider>
      </body>
    </html>
  );
}
