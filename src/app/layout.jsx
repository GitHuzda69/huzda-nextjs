import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HX Homepage",
  description: "Homepage description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <div className="container">
          <div className="contentContainer">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
