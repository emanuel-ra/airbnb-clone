import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
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
        <ClientOnly>
          <Modal  isOpen title="Hello World" actionLabel="Submit" />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
