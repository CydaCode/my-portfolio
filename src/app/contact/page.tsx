"use client";

import { Box, VStack, Text, Heading, Link as ChakraLink, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";

export default function Contact() {
  const [imageError, setImageError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <VStack spacing={4} align="start" w="100%">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Heading size="lg" color="var(--color-primary)" mb={2} _hover={{ opacity: 0.7 }}>
                Cynthia
              </Heading>
              <Heading size="lg" color="var(--color-dark)">
                Nwankwo
              </Heading>
            </Link>
            {/* Profile Picture in Sidebar */}
            <Box
              w={{ base: "100px", md: "120px" }}
              h={{ base: "100px", md: "120px" }}
              borderRadius="50%"
              bg="var(--color-bg-variant)"
              border="3px solid var(--color-primary)"
              overflow="hidden"
              position="relative"
              boxShadow="0 2px 10px rgba(42, 61, 235, 0.2)"
              mt={2}
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
                      fontSize="2xl"
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
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  CN
                </Box>
              )}
            </Box>
          </VStack>

          <VStack spacing={1} align="start" flex={1} justify="center">
            {[
              { name: "About", path: "/about" },
              { name: "Experience", path: "/experience" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact", active: true },
            ].map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                style={{ textDecoration: "none" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Text
                  fontSize="xl"
                  color={item.active ? "var(--color-primary)" : "var(--color-dark)"}
                  fontWeight={item.active ? "bold" : "500"}
                  _hover={{ color: "var(--color-primary)", transform: "translateX(5px)" }}
                  transition="all 0.3s"
                  cursor="pointer"
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </VStack>
        </VStack>
      </Box>

      <Box className={styles.mainContent}>
        <Box className={styles.pageContainer}>
          <Box className={styles.contentWrapper}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading className={styles.sectionTitle}>Get In Touch</Heading>
              <Text className={styles.sectionSubtitle}>
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and innovation.
              </Text>

              <VStack spacing={8} align="start">
                <Box>
                  <Text fontSize="sm" color="var(--color-primary)" textTransform="uppercase" letterSpacing="wide" mb={2}>
                    Email
                  </Text>
                  <ChakraLink href="mailto:nwacynti25@gmail.com">
                    <Text fontSize="xl" color="var(--color-primary)" _hover={{ textDecoration: "underline" }}>
                      nwacynti25@gmail.com
                    </Text>
                  </ChakraLink>
                </Box>

                <Box>
                  <Text fontSize="sm" color="var(--color-primary)" textTransform="uppercase" letterSpacing="wide" mb={2}>
                    Location
                  </Text>
                  <Text fontSize="xl" color="var(--color-dark)">
                    Lagos, Nigeria
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" color="var(--color-primary)" textTransform="uppercase" letterSpacing="wide" mb={4}>
                    Social Links
                  </Text>
                  <VStack spacing={3} align="start">
                    <ChakraLink href="https://www.linkedin.com/in/cynthia-nwankwo-1c" isExternal>
                      <Text fontSize="lg" color="var(--color-primary)" _hover={{ textDecoration: "underline" }}>
                        LinkedIn →
                      </Text>
                    </ChakraLink>
                    <ChakraLink href="https://github.com/CydaCode" isExternal>
                      <Text fontSize="lg" color="var(--color-primary)" _hover={{ textDecoration: "underline" }}>
                        GitHub →
                      </Text>
                    </ChakraLink>
                    <ChakraLink href="https://twitter.com/tia_code" isExternal>
                      <Text fontSize="lg" color="var(--color-primary)" _hover={{ textDecoration: "underline" }}>
                        Twitter →
                      </Text>
                    </ChakraLink>
                  </VStack>
                </Box>

                <Box mt={8}>
                  <Text className={styles.textLarge} color="var(--color-dark)" opacity={0.8}>
                    Feel free to reach out if you&apos;d like to collaborate on a project, 
                    discuss opportunities, or simply connect!
                  </Text>
                </Box>
              </VStack>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

