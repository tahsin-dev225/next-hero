import { Geist, Geist_Mono,Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight : [ '300', '400', '500', '700', '900'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default : "Explore next",
    template : "%s | Next Hero"
  },
  description: "made next web page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${roboto.className} antialiased`}>
        <Navbar></Navbar>
        <div>
          {children}
        </div>
        
      </body>
    </html>
  );
}
