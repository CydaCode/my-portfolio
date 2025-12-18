"use client";

import { Box, VStack, HStack, Text, Heading, Link as ChakraLink, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  const [imageError, setImageError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && window.innerWidth <= 768) {
        const target = event.target as HTMLElement;
        const sidebar = document.querySelector('[class*="sidebar"]');
        const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
        
        if (sidebar && menuButton) {
          if (!sidebar.contains(target) && !menuButton.contains(target)) {
            setIsMenuOpen(false);
          }
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <Box className={`${styles.homeContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
      
      {/* Sidebar Navigation */}
      <Box className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <VStack spacing={8} align="start" h="100%" p={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading size="lg" color="var(--color-primary)" mb={2}>
              Cynthia
            </Heading>
            <Heading size="lg" color="var(--color-dark)">
              Nwankwo
            </Heading>
          </motion.div>

          <VStack spacing={1} align="start" flex={1} justify="center">
            {[
              { name: "About", path: "/about" },
              { name: "Experience", path: "/experience" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={item.path} 
                  style={{ textDecoration: "none" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Text
                    fontSize="xl"
                    color="var(--color-dark)"
                    _hover={{ color: "var(--color-primary)", transform: "translateX(5px)" }}
                    transition="all 0.3s"
                    cursor="pointer"
                    fontWeight="500"
                  >
                    {item.name}
                  </Text>
                </Link>
              </motion.div>
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

      {/* Main Content Area */}
      <Box className={styles.mainContent}>
        <VStack spacing={12} align="start" p={{ base: 8, md: 16 }} maxW="800px" mx="auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            {/* Profile Picture Section */}
            <Box mb={12} textAlign="center">
              <Box
                w={{ base: "150px", md: "200px" }}
                h={{ base: "150px", md: "200px" }}
                borderRadius="50%"
                bg="var(--color-bg-variant)"
                border="4px solid var(--color-primary)"
                mx="auto"
                mb={6}
                overflow="hidden"
                position="relative"
                boxShadow="0 4px 20px rgba(42, 61, 235, 0.2)"
              >
                {!imageError ? (
                  <Image
                    src="/cynthia-dp.jpeg"
                    alt="Cynthia Nwankwo"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    onError={() => setImageError(true)}
                    fallback={
                      <Box
                        w="100%"
                        h="100%"
                        bg="linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-variant) 100%)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontSize="4xl"
                        fontWeight="bold"
                      >
                        CN
                      </Box>
                    }
                  />
                ) : (
                  <Box
                    w="100%"
                    h="100%"
                    bg="linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-variant) 100%)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="4xl"
                    fontWeight="bold"
                  >
                    CN
                  </Box>
                )}
              </Box>
              <Heading size={{ base: "xl", md: "2xl" }} mb={4} color="var(--color-dark)">
                DevOps & Cloud Engineer
              </Heading>
              {/* <Heading size={{ base: "lg", md: "xl" }} mb={6} color="var(--color-primary)" fontWeight="normal">
                Software Developer
              </Heading> */}
            </Box>

            <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="tall" color="var(--color-dark)" mb={8} textAlign="justify">
              Building scalable cloud infrastructure and crafting exceptional digital experiences.
              Passionate about automation, reliability, and creating products that make a difference.
            </Text>

            <VStack spacing={6} align="start" w="100%">
              <Box>
                <Text fontSize="sm" color="var(--color-primary)" textTransform="uppercase" letterSpacing="wide" mb={2}>
                  Email
                </Text>
                <ChakraLink href="mailto:nwacynti25@gmail.com" color="var(--color-primary)">
                  <Text fontSize="lg">nwacynti25@gmail.com</Text>
                </ChakraLink>
              </Box>

              <Box>
                <Text fontSize="sm" color="var(--color-primary)" textTransform="uppercase" letterSpacing="wide" mb={4}>
                  Quick Links
                </Text>
                <VStack align="start" spacing={2}>
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    <Text color="var(--color-primary)" _hover={{ textDecoration: "underline" }}>
                      Learn more about me →
                    </Text>
                  </Link>
                  <Link href="/experience" style={{ textDecoration: "none" }}>
                    <Text color="var(--color-primary)" _hover={{ textDecoration: "underline" }}>
                      View my experience →
                    </Text>
                  </Link>
                  <Link href="/projects" style={{ textDecoration: "none" }}>
                    <Text color="var(--color-primary)" _hover={{ textDecoration: "underline" }}>
                      See my projects →
                    </Text>
                  </Link>
                </VStack>
              </Box>
            </VStack>
          </motion.div>
        </VStack>
      </Box>
    </Box>
  );
}
