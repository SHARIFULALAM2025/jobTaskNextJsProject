import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Header/Navbar";
import Container from "@/Components/Container/Container";
import Footer from "@/Components/Footer/Footer";
import AuthProvider from "@/provider/AuthProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Shopping - Your Ultimate Online Shopping Destination",
  description: "Discover amazing products with great deals, fast delivery, and excellent customer service. Shop electronics, fashion, home goods and more at E-Shopping.",
  keywords: "online shopping, e-commerce, electronics, fashion, home goods, best deals, fast delivery",
  author: "E-Shopping Team",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>

            <Container>
            <Navbar></Navbar>

              {children}
              <Footer></Footer>
            </Container>

        </AuthProvider>
      </body>
    </html>
  )
}
