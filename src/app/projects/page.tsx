"use client";

import { Box, VStack, HStack, Text, Heading, Link as ChakraLink, Badge, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";

export default function Projects() {
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

  const projectTemplates = [
    {
      title: "Project Title",
      category: "DevOps / Software Development",
      description: "Brief description of your project. Explain what problem it solves and what technologies you used.",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      githubUrl: "#",
      liveUrl: "#",
      status: "coming-soon",
    },
    {
      title: "Project Title",
      category: "DevOps / Software Development",
      description: "Brief description of your project. Explain what problem it solves and what technologies you used.",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      githubUrl: "#",
      liveUrl: "#",
      status: "coming-soon",
    },
    {
      title: "Project Title",
      category: "DevOps / Software Development",
      description: "Brief description of your project. Explain what problem it solves and what technologies you used.",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      githubUrl: "#",
      liveUrl: "#",
      status: "coming-soon",
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
              { name: "Experience", path: "/experience" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects", active: true },
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
              <Heading className={styles.sectionTitle}>Projects</Heading>
              <Text className={styles.sectionSubtitle}>
                Selected projects showcasing my work in both DevOps engineering and software development. 
                More projects coming soon!
              </Text>

              <VStack spacing={6} align="stretch">
                {projectTemplates.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={styles.projectCard}
                  >
                    <HStack spacing={4} mb={3} flexWrap="wrap">
                      <Badge
                        bg="var(--color-primary)"
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                      >
                        {project.category}
                      </Badge>
                      {project.status === "coming-soon" && (
                        <Badge
                          bg="var(--color-bg-variant)"
                          color="var(--color-primary)"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="sm"
                        >
                          Coming Soon
                        </Badge>
                      )}
                    </HStack>

                    <Heading size="lg" mb={3} color="var(--color-dark)">
                      {project.title}
                    </Heading>

                    <Text className={styles.textLarge} mb={4}>
                      {project.description}
                    </Text>

                    <HStack spacing={2} mb={4} flexWrap="wrap">
                      {project.technologies.map((tech, i) => (
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

                    <HStack spacing={4}>
                      {project.githubUrl !== "#" && (
                        <ChakraLink href={project.githubUrl} isExternal>
                          <Text color="var(--color-primary)" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
                            GitHub →
                          </Text>
                        </ChakraLink>
                      )}
                      {project.liveUrl !== "#" && (
                        <ChakraLink href={project.liveUrl} isExternal>
                          <Text color="var(--color-primary)" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
                            Live Demo →
                          </Text>
                        </ChakraLink>
                      )}
                    </HStack>
                  </motion.div>
                ))}
              </VStack>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

