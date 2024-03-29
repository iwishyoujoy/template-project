import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { PageLayout } from "@components/PageLayout";
import { StoreProvider } from "@redux/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// TODO: заменить favicon.ico

/* шаблон, который будет применяться ко всем страницам */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StoreProvider>
          <PageLayout header={<Header />} footer={<Footer />}>
            {children}
          </PageLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
