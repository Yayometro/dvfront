import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Provider";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🌜DreamyVerse🌜",
  description: "Connect your dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NextUIProvider>
            <NextThemeProvider
              attribute="class"
              defaultTheme="dark"
              themes={["dark", "light"]}
            >
              {children}
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </NextThemeProvider>
          </NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
