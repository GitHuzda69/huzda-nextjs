import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Topbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
