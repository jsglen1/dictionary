import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/providers/ThemeProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import React from "react";


export const metadata: Metadata = {
  title: "Dictionary",
  description: "Created by Jesus Glen",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={` antialiased`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
