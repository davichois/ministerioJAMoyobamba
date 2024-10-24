import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AdSense from "../components/AdSense";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Ministerio J.A.M",
  description: "Ministerio Joven Adventista es una comunidad dedicada a inspirar y conectar a jóvenes en su camino espiritual. A través de actividades dinámicas, estudio bíblico y servicio, buscamos fortalecer la fe cristiana y promover valores positivos, fomentando el crecimiento personal y el compañerismo entre jóvenes adventistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <AdSense pId="9079601747335327" />
      </Head>
      <body className={`${lato.className}`}>
        <div className="min-h-screen bg-gray-50">
          <header className="border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  width={35}
                  height={35}
                  src={"https://sabbath-school.adventech.io/assets/logo.png"}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold text-gray-900">
                    Ministerio Joven Adventista
                  </h1>
                  <h3 className="text-[8px] font-light text-gray-900">
                    MOYOBAMBA.ES
                  </h3>
                </div>
              </div>
              <nav className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-sm text-gray-700 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-[#2E5797]"
                >
                  Escuela Sabatica
                </Link>
                <Link
                  href="/enroll"
                  className="text-sm text-gray-700 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-[#2E5797]"
                >
                  Inscribete
                </Link>
              </nav>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>
        </div>
      </body>
      <GoogleAnalytics gaId="G-4MQ42RJSCK" />
    </html>
  );
}
