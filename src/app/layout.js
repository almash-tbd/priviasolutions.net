import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import AuthModal from "@/components/AuthModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Privia Solutions | Enterprise Software & Cloud Solutions",
  description: "Privia Solutions designs, builds, and maintains secure, scalable cloud systems, custom software platforms, and advanced cybersecurity solutions for startups and enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-[#C4E2F5] selection:text-[#2C5EAD]">
        <ToastProvider />
        <AuthModal />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
