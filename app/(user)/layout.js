import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { PizzaProvider } from "@/context/pizzaContext";
import { CartProvider } from "@/context/cartContext";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/context/userContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PizzaHut",
  description: "Developed By developerpalakbasak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>

        {/* Wrap everything inside PizzaProvider */}
        <PizzaProvider>
          <CartProvider>
            <UserProvider>
              <ToastContainer />


              {/* Navbar Container */}
              <div className="w-full z-10 fixed">
                <Navbar />
              </div>
              {/* Main Content */}
              <main className="flex-grow ">{children}</main>
              <Footer />
            </UserProvider>
          </CartProvider>
        </PizzaProvider>

      </body>
    </html>
  );
}
