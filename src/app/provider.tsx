"use client";


import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { ReactNode } from "react";

// Create a client

export default function Providers({ children }: { children: ReactNode }) {
    return (
      <ChakraProvider>
        <CSSReset />
        {children}
      </ChakraProvider>

  );
}