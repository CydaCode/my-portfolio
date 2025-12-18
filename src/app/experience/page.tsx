"use client";

import { Box, VStack, HStack, Text, Heading, Link as ChakraLink, Badge, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";

export default function Experience() {
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

  const experiences = [
    {
      title: "DevOps Engineer & Software Developer",
      period: "Jan 2024 - Present",
      location: "Remote",
      type: "devops",
      achievements: [
        "Built and automated CI/CD pipelines using GitHub Actions, improving deployment efficiency and reducing manual release efforts",
        "Deployed and supported AWS cloud infrastructure (EC2, S3, IAM, CloudWatch) to enhance reliability and scalability",
        "Containerized applications using Docker to ensure consistent development and production environments",
        "Contributed to software development and UI improvements to enhance performance and user experience",
      ],
      link: "https://getmovva.com",
      linkText: "View Platform",
      technologies: ["GitHub Actions", "AWS", "Docker", "CI/CD", "EC2", "S3", "IAM", "CloudWatch"],
    },
    {
      title: "Software Engineer",
      period: "Dec 2022 - Oct 2024",
      location: "Delaware, US (Remote)",
      type: "software",
      achievements: [
        "Redesigned the company platform, resulting in a 250% increase in inbound leads",
        "Drove product improvements that enabled hosting 13+ hackathons, onboarding 1,469+ builders, and supporting 7 communities",
        "Implemented responsive UI designs and enhanced performance using modern software development tools",
        "Contributed to platform growth, now supporting 7 communities, hosting 13+ hackathons, onboarding 1,469+ builders, and hosting 150+ projects",
      ],
      link: "https://labs.ayahq.com",
      linkText: "Visit Site",
      technologies: ["Next.js", "React", "TypeScript", "Chakra UI", "Axios"],
    },
    {
      title: "Learning Manager (Volunteer)",
      period: "Jun 2020 - Aug 2023",
      location: "Lagos, Nigeria",
      type: "community",
      achievements: [
        "Designed and managed learning programs for 4,000+ mentees transitioning into technology",
        "Developed structured mentorship processes and engagement strategies to support talent growth and retention",
        "Strategized ways to grow and retain talent in the tech community",
      ],
      technologies: ["Mentorship", "Community Management", "Learning Design"],
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
              { name: "Experience", path: "/experience", active: true },
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
              <Heading className={styles.sectionTitle}>Experience</Heading>
              <Text className={styles.sectionSubtitle}>
                Exploring both paths: Building scalable infrastructure as a DevOps Engineer and 
                crafting exceptional user experiences as a Software Developer.
              </Text>

              <Box className={styles.timeline}>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={styles.timelineItem}
                  >
                    <Box className={styles.experienceItem}>
                      <HStack spacing={4} mb={4} flexWrap="wrap">
                        <Badge
                          bg={exp.type === "devops" ? "var(--color-primary)" : exp.type === "software" ? "#9333ea" : "#10b981"}
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="sm"
                        >
                          {exp.type === "devops" ? "DevOps & Cloud" : exp.type === "software" ? "Software Development" : "Community"}
                        </Badge>
                        <Text className={styles.textMuted}>{exp.period}</Text>
                        <Text className={styles.textMuted}>•</Text>
                        <Text className={styles.textMuted}>{exp.location}</Text>
                      </HStack>

                      <Heading size="lg" mb={4} color="var(--color-dark)">
                        {exp.title}
                      </Heading>

                      <VStack spacing={3} align="start" mb={4}>
                        {exp.achievements.map((achievement, i) => (
                          <Text key={i} className={styles.textLarge}>
                            • {achievement}
                          </Text>
                        ))}
                      </VStack>

                      {exp.link && (
                        <ChakraLink href={exp.link} isExternal mb={4} display="inline-block">
                          <Text color="var(--color-primary)" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
                            {exp.linkText} →
                          </Text>
                        </ChakraLink>
                      )}

                      <HStack spacing={2} flexWrap="wrap" mt={4}>
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            bg="var(--color-bg-variant)"
                            color="var(--color-primary)"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
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

