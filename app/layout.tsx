"use client";

import React, { PropsWithChildren } from "react";
import { Link } from "@chakra-ui/react";

import Provider from "@/components/ui/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>Mario Nursalim</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Mario Nursalim Personal Portofolio Website"
        />
        <meta name="theme-color" content="#060a13" />
        <link rel="icon" href="/Ayamayam.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Funnel+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider>
          <Link
            href="#main"
            position="absolute"
            left="4"
            top="-24"
            zIndex="skipLink"
            py="2"
            px="4"
            borderRadius="full"
            bg="brand"
            color="white"
            _focusVisible={{ top: "4" }}
          >
            Skip to content
          </Link>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
