"use client";

import { Box, VStack,  Text, Heading, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";

export default function About() {
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
                  src="/profile.jpg"
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
              { name: "About", path: "/about", active: true },
              { name: "Experience", path: "/experience" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
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
              <Heading className={styles.sectionTitle}>About Me</Heading>
              <Text className={styles.sectionSubtitle}>
                I am an experienced DevOps & Cloud Engineer and Software Developer with hands-on experience 
                in cloud infrastructure, CI/CD automation, containerization, and application deployment.
              </Text>

              <VStack spacing={8} align="start">
                <Box>
                  <Heading size="lg" mb={4} color="var(--color-primary)">
                    Professional Summary
                  </Heading>
                  <VStack spacing={4} align="start">
                    <Text className={styles.textLarge}>
                      Skilled in AWS, Docker, Jenkins, Kubernetes, GitHub Actions, and modern JavaScript development. 
                      Passionate about building scalable systems, improving developer workflows, 
                      and enhancing product reliability.
                    </Text>
                    <Text className={styles.textLarge}>
                      With a strong foundation in software development and a deep understanding of 
                      cloud architecture, I bridge the gap between development and operations. 
                      I&apos;ve contributed to projects that have significantly improved user engagement 
                      and system reliability.
                    </Text>
                    <Text className={styles.textLarge}>
                      Currently working where I build and automate CI/CD pipelines, deploy AWS cloud 
                      infrastructure, and contribute to software development.
                    </Text>
                  </VStack>
                </Box>

                <Box w="100%">
                  <Heading size="lg" mb={4} color="var(--color-primary)">
                    Education & Certifications
                  </Heading>
                  <VStack spacing={6} align="start">
                    <Box>
                      <Text fontWeight="bold" fontSize="lg" mb={2}>
                        AWS Cloud Practitioner & Solutions Architect
                      </Text>
                      <Text className={styles.textMuted} mb={2}>ALX | Jun 2023 - Feb 2024</Text>
                      <Text className={styles.textLarge}>
                        Proficient in designing resilient, high-availability, and fault-tolerant architectures 
                        using AWS services. Advanced knowledge in implementing robust security measures, 
                        adhering to compliance requirements, and utilizing AWS security tools. Comprehensive 
                        understanding of key AWS services including EC2, S3, VPC, RDS, Lambda, CloudFormation, and IAM.
                      </Text>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize="lg" mb={2}>
                        Diploma in Software Development
                      </Text>
                      <Text className={styles.textMuted} mb={2}>TIIDELab | Mar 2021 - Dec 2021</Text>
                      <Text className={styles.textLarge}>
                        Developed technical solutions to support Nigerian youths in transforming business 
                        ideas into innovative technology-driven solutions. Provided mentorship and training 
                        to aspiring innovators and solution providers.
                      </Text>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize="lg" mb={2}>
                        B.Tech in Chemistry
                      </Text>
                      <Text className={styles.textMuted}>Federal University of Technology, Minna | 2013 - 2018</Text>
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

