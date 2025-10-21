import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BalanceVisibilityProvider } from "@/context/BalanceVisibilityContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteBank",
  description: "Criado por alunos da Postech - Fiap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BalanceVisibilityProvider>
          {children}
        </BalanceVisibilityProvider>
      </body>
    </html>
  );
}
