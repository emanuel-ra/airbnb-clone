import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
'./components/navbar/NavBar';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
