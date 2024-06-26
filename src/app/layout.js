import { Inter } from "next/font/google";
import "./globals.css";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X clone",
  description: "A clone of X website using NEXT.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">

          <div>
            <Sidebar />
          </div>

          <div>
        {children}
          </div>

        <div>
          <News />
        </div>

        </div>
      </body>
    </html>
  );
}
