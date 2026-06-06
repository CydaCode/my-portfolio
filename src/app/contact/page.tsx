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
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <Box className={`${styles.homeContainer} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />

      <Box className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
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
              <Heading className={styles.sectionTitle}>Contact</Heading>
              <Text className={styles.sectionSubtitle}>
                Open to DevOps roles, cloud engineering projects, Software Engineering roles and collaborations.
                The fastest way to reach me is email.
              </Text>

              <Box className={styles.contactGrid}>
                <Box className={styles.contactCard}>
                  <Text className={styles.contactCardLabel}>Email</Text>
                  <Text className={styles.contactCardValue}>
                    <ChakraLink href="mailto:nwacynti25@gmail.com">
                      nwacynti25@gmail.com
                    </ChakraLink>
                  </Text>
                </Box>

                <Box className={styles.contactCard}>
                <Text className={styles.contactCardLabel}>Work Preference</Text>
                <Text className={styles.contactCardValue}>Remote • Open to Global Opportunities</Text>
                </Box>

                <Box className={`${styles.contactCard} ${styles.contactCardFull}`}>
                  <Text className={styles.contactCardLabel}>Connect</Text>
                  <Box className={styles.socialLinks}>
                    <ChakraLink
                      href="https://www.linkedin.com/in/cynthia-nwankwo-1c"
                      isExternal
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </ChakraLink>
                    <ChakraLink
                      href="https://github.com/CydaCode"
                      isExternal
                      className={styles.socialLink}
                    >
                      GitHub
                    </ChakraLink>
                    <ChakraLink
                      href="https://twitter.com/tia_code"
                      isExternal
                      className={styles.socialLink}
                    >
                      Twitter
                    </ChakraLink>
                    <ChakraLink
                      href="https://tiacode.hashnode.dev"
                      isExternal
                      className={styles.socialLink}
                    >
                      Blog
                    </ChakraLink>
                  </Box>
                </Box>
              </Box>

              <Box className={styles.contactCTA}>
                <Text className={styles.contactCTAText}>
                  Whether it&apos;s a full-time opportunity, a contract project, or a technical
                  conversation, I&apos;d love to hear from you.
                </Text>
                <ChakraLink href="mailto:nwacynti25@gmail.com" className={styles.contactCTAButton}>
                  Send an Email
                </ChakraLink>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
