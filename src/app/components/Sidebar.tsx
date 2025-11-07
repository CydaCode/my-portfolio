"use client";

import { Box, VStack, HStack, Text, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface SidebarProps {
  activeRoute: string;
}

export default function Sidebar({ activeRoute }: SidebarProps) {
  const routes = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box className="sidebar" style={{
      width: "300px",
      background: "var(--color-white)",
      borderRight: "2px solid var(--color-bg-variant)",
      position: "fixed",
      height: "100vh",
      left: 0,
      top: 0,
      zIndex: 100,
      overflowY: "auto",
    }}>
      <VStack spacing={8} align="start" h="100%" p={8}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Heading size="lg" color="var(--color-primary)" mb={2} _hover={{ opacity: 0.7 }}>
            Cynthia
          </Heading>
          <Heading size="lg" color="var(--color-dark)">
            Nwankwo
          </Heading>
        </Link>

        <VStack spacing={1} align="start" flex={1} justify="center">
          {routes.map((item) => (
            <Link key={item.path} href={item.path} style={{ textDecoration: "none" }}>
              <Text
                fontSize="xl"
                color={activeRoute === item.path ? "var(--color-primary)" : "var(--color-dark)"}
                fontWeight={activeRoute === item.path ? "bold" : "500"}
                _hover={{ color: "var(--color-primary)", transform: "translateX(5px)" }}
                transition="all 0.3s"
                cursor="pointer"
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </VStack>

        <VStack spacing={4} align="start" w="100%">
          <Text fontSize="sm" color="var(--color-dark)" opacity={0.7}>
            Connect with me
          </Text>
          <HStack spacing={4}>
            <ChakraLink href="https://www.linkedin.com/in/cynthia-nwankwo-1c" isExternal>
              <Text color="var(--color-primary)" _hover={{ opacity: 0.7 }}>LinkedIn</Text>
            </ChakraLink>
            <ChakraLink href="https://github.com/CydaCode" isExternal>
              <Text color="var(--color-primary)" _hover={{ opacity: 0.7 }}>GitHub</Text>
            </ChakraLink>
            <ChakraLink href="https://twitter.com/tia_code" isExternal>
              <Text color="var(--color-primary)" _hover={{ opacity: 0.7 }}>Twitter</Text>
            </ChakraLink>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

