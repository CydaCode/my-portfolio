"use client";

import { Box, VStack, Text, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: "☁",
    skills: [
      "AWS (EC2, S3, IAM, CloudWatch, VPC, RDS, EKS, ECR)",
      "Terraform",
      "Ansible",
      "Linux",
      "Nginx",
      "Shell Scripting",
      "IAM Roles & Policies",
      "OIDC Configuration",
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: "⚙",
    skills: [
      "Docker",
      "Kubernetes (EKS)",
      "GitHub Actions",
      "Jenkins",
      "CI/CD Pipelines",
      "Git",
      "External Secrets Operator (ESO)",
      "Helm Charts",
      "IRSA (IAM Roles for Service Accounts)",
      "Horizontal Pod Autoscaler (HPA)",
    ],
  },
  {
    title: "Backend Development",
    icon: "🖥️",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "REST API Design",
      "JWT Authentication",
      "Prisma ORM",
      "PostgreSQL",
    ],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Responsive Design",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      "YOLOv8",
      "Ultralytics",
      "PyTorch",
      "Computer Vision",
      "Model Inference",
    ],
  },
  {
    title: "Build & Package Tools",
    icon: "📦",
    skills: [
      "Maven",
      "Gradle",
      "npm",
      "Yarn",
    ],
  },
];

export default function Skills() {
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
              { name: "Skills", path: "/skills", active: true },
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
              <Heading className={styles.sectionTitle}>Technical Skills</Heading>
              <Text className={styles.sectionSubtitle}>
                Tools and technologies I use to build, deploy, and maintain production systems.
              </Text>

              <Box className={styles.skillsLayout}>
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box className={styles.skillGroup}>
                      <Box className={styles.skillGroupHeader}>
                        <Box className={styles.skillGroupIcon}>{category.icon}</Box>
                        <Text className={styles.skillGroupTitle}>{category.title}</Text>
                        <Text className={styles.skillGroupCount}>
                          {category.skills.length} skills
                        </Text>
                      </Box>
                      <Box className={styles.skillTags}>
                        {category.skills.map((skill) => (
                          <span key={skill} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
