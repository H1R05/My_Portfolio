import type { ReactNode } from "react";
import "./globals.css";
import { inter } from "./components/fonts/permanentMarker";
import AppShell from "./components/Layout/AppShell";

export default function RootLayout({ children }: { children: ReactNode }) {
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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
