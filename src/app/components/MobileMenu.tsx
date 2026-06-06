"use client";

import { Button } from "@chakra-ui/react";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-label="Toggle menu"
      display={{ base: "flex", md: "none" }}
      position="fixed"
      top="1rem"
      left="1rem"
      zIndex={1001}
      bg="var(--color-primary)"
      color="white"
      _hover={{ bg: "var(--color-primary-variant)" }}
      p={3}
      borderRadius="8px"
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
      fontSize=""
      minW="38px"
      h="38px"
    >
      {isOpen ? "✕" : "☰"}
    </Button>
  );
}

