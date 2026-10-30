import React, { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <head>
        <title>marionursalim</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Mario Nursalim Personal Portofolio Website"
        />
        <link rel="icon" href="/Ayamayam.jpg/" />
      </head>
      <body className="bg-[#0a0a0a]">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
