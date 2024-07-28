import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/common/components/Layout/Header";
import Footer from "@/common/components/Layout/Footer";
import { FAV_ICON } from "@/common/constants";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href={FAV_ICON} />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
