import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Genocare In.",
  description: "This is a platform to manage your hospital easily and efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
        <Toaster richColors />
      </body>
    </html>
  );
}
