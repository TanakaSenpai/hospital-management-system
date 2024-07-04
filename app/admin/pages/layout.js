import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import TopBar from "@/app/admin/pages/components/TopBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin - Genocare In.",
  description:
    "This is a platform to manage your hospital easily and efficiently",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-full">
        <div>
          <TopBar />
      </div>
        {children}
      </div>
    </div>
  );
}
