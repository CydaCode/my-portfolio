"use client";

import { Box, VStack,  Text, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";

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

  const skillCategories = [
    {
      title: "DevOps & Cloud",
      skills: [
        "AWS (EC2, S3, IAM, CloudWatch, VPC, RDS, Lambda, CloudFormation)",
        "Linux Administration",
        "Nginx",
        "Terraform (Infrastructure as Code)",
        "Docker (Containerization)",
        "GitHub Actions (CI/CD)",
        "Jenkins",
        "Kubernetes",
        "Monitoring & Logging",
        "Cloud Security",
        "Serverless Architecture",
        "Infrastructure Automation",
        "Configuration Management",
        "Cloud Migration",
        "Disaster Recovery",
        "Load Balancing",
        "Auto Scaling",
        "Cloud Cost Optimization",
      ],
    },
    {
      title: "Software Development",
      skills: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "HTML/CSS",
        "Tailwind CSS",
        "Chakra UI",
        "RESTful APIs",
        "State Management",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "Jira",
        "Trello",
        "ClickUp",
        "Scrum",
        "Agile Methodologies",
        "Notion",
        "CI/CD Pipelines",
        "Monitoring Tools",
        "Log Management",
        "Version Control",
        "Code Review",
        "Testing",
        "Debugging",
        "Documentation",
      ],
    },
  ];

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
                A comprehensive overview of my technical expertise across DevOps, cloud infrastructure, 
                and software development.
              </Text>

              <Box className={styles.skillsGrid}>
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={styles.skillCategory}
                  >
                    <Heading size="md" mb={4} color="var(--color-primary)">
                      {category.title}
                    </Heading>
                    <VStack spacing={2} align="start">
                      {category.skills.map((skill, i) => (
                        <Text key={i} fontSize="sm" color="var(--color-dark)">
                          • {skill}
                        </Text>
                      ))}
                    </VStack>
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

