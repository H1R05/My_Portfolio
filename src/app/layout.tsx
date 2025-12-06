"use client";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoadingScreen from "./components/UI/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { inter } from "./components/fonts/permanentMarker";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep the loader visible long enough for at least one greeting change
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Samuele Angelicchio — Portfolio</title>
        <link rel="icon" href="../elements/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Portfolio di Samuele Angelicchio: sviluppo cloud, full stack e prodotti digitali."
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loader" />}
        </AnimatePresence>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
