import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

export const russoOne = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-subTitle",
});
