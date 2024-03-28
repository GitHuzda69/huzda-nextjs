import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Theme from "@/theme/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HX Homepage",
  description: "Homepage description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>{children}</Theme>
        <div className="contentContainer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
