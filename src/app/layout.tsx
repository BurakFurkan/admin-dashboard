import "./globals.css";
import {  Montserrat } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { Providers } from "./Redux/provider";
import PageName from "./components/PageName";
import { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400","500","600","700"],
});

export const metadata: Metadata = {
  title: "Bank Admin Dashboard",
  description: "Bank Admin Dashboard - Burak Furkan TENEKECİ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-500 h-full  flex text-green-500 `}>
        <Sidebar />
        <div className="flex flex-col justify-start items-start w-full h-full">
          <Providers>
            <Searchbar />
            <PageName />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
