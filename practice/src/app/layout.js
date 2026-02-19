import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { oswald, roboto,workSans } from "@/fonts";
import Navigations from "./components/Navigations";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${workSans.variable} ${oswald.variable} antialiased`}
        >
        <Navigations/>
        {children}
      </body>
    </html>
  );
}
