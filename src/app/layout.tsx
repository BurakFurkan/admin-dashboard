"use client"
import "./globals.css";
import { Inter,Ubuntu,Montserrat } from "next/font/google";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"],weight:["300","400","700"] });

export const metadata = {
  title: "Bank Admin Dashboard",
  description: "Bank Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-500 h-full flex gap-1`}>
        <ProSidebarProvider>
          <Sidebar />
        </ProSidebarProvider>
        <div className="flex flex-col w-full h-full">
        <Searchbar /> 
        {children}
        </div>
      </body>
    </html>
  );
}
