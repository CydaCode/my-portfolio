"use client";

import { Box, VStack, Text, Heading, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";

const certifications = [
  "AWS Solutions Architect – Associate",
  "AWS Cloud Practitioner",
  "AWS AI Practitioner",
  "DevOps Engineering Certification",
  "Introduction to Kubernetes (LFS158)",
  "Introduction to Linux",
];

const education = [
  { degree: "Diploma – Software Development", school: "TIIDELab" },
  { degree: "Bachelor of Technology – Chemistry", school: "Federal University of Technology, Minna" },
];

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
                DevOps and Cloud Engineer who also writes code. I design infrastructure,
                automate deployments, and build the products that run on top of it.
              </Text>

              <Box className={styles.aboutSection}>
                <Text className={styles.sectionHeading}>Professional Summary</Text>
                <VStack spacing={4} align="start">
                  <Text className={styles.aboutText}>
                    I design, automate, and deploy cloud infrastructure on AWS, from
                    Terraform-provisioned EC2 and VPC environments to Dockerized applications
                    shipped through GitHub Actions and Jenkins pipelines. My work focuses on
                    making deployments repeatable, environments consistent, and systems reliable
                    at scale.
                  </Text>
                  <Text className={styles.aboutText}>
                    Alongside infrastructure work, I bring a software engineering background in
                    React, Next.js, and TypeScript. That dual perspective lets me bridge the
                    gap between what developers build and how it runs in production, whether
                    that means containerizing a Django backend or redesigning a platform that
                    drives measurable business growth.
                  </Text>
                  <Text className={styles.aboutText}>
                    Currently at Ecoloop, I operate end-to-end CI/CD pipelines, manage AWS
                    infrastructure with Terraform and Ansible, and support production reliability
                    through monitoring and deployment optimization.
                  </Text>
                </VStack>
              </Box>

              <Box className={styles.aboutSection}>
                <Text className={styles.sectionHeading}>Certifications</Text>
                <Box className={styles.certGrid}>
                  {certifications.map((cert) => (
                    <Box key={cert} className={styles.certItem}>
                      <Box className={styles.certDot} />
                      <Text className={styles.certName}>{cert}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box>
                <Text className={styles.sectionHeading}>Education</Text>
                <Box>
                  {education.map((item) => (
                    <Box key={item.degree} className={styles.educationItem}>
                      <Text className={styles.educationDegree}>{item.degree}</Text>
                      <Text className={styles.educationSchool}>{item.school}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
