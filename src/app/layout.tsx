import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { Providers } from "./Redux/provider";
import PageName from "./components/PageName";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

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
        <Sidebar />
        <div className="flex flex-col w-full h-full">
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
