"use client";

import { Box, VStack, Text, Heading, Link as ChakraLink, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";
import TabToggle from "../components/TabToggle";

const projects = [
  {
    title: "Automating CI/CD & Data Persistence for a Django Application",
    technologies: ["Django", "Docker", "GitHub Actions", "AWS EC2", "SQLite"],
    bullets: [
      "Implemented a CI/CD pipeline using GitHub Actions to automate Docker image build, push, and deployment to AWS EC2.",
      "Containerized a Django backend with Docker, ensuring consistent environments across local and production systems.",
      "Configured persistent storage for SQLite using Docker volume mounts to prevent data loss during container redeployments.",
      "Automated server deployments via shell scripts, eliminating manual SSH-based release processes.",
      "Established a reliable, reproducible deployment workflow designed for future scalability and infrastructure evolution.",
    ],
    githubUrl: "https://github.com/CydaCode/studybud",
    articleUrl: "https://tiacode.hashnode.dev/automating-deployment-and-data-persistence-for-a-growing-django-startup?utm_source=hashnode&utm_medium=feed",
  },
  {
    title: "Automating CI/CD & Durable File Storage for a Web Application",
    technologies: ["Jenkins", "GitHub", "AWS EC2", "AWS S3", "Node.js", "CI/CD"],
    bullets: [
      "Designed and implemented an automated CI/CD pipeline using Jenkins to deploy backend and frontend services from GitHub to AWS EC2.",
      "Eliminated manual server provisioning and SSH-based deployments by automating code delivery, dependency installation, and application restarts.",
      "Migrated file uploads from local instance storage to AWS S3, ensuring durable, shared access across backend instances.",
      "Implemented secure environment variable injection via Jenkins credentials for AWS and application configuration.",
      "Diagnosed and resolved runtime configuration issues related to process management and environment visibility.",
      "Established a stable deployment baseline enabling horizontal scaling and future process orchestration improvements.",
    ],
    githubUrl: "https://github.com/CydaCode/cv-editor",
    articleUrl: "https://tiacode.hashnode.dev/automating-deployment-and-reliable-cv-storage?utm_source=hashnode&utm_medium=feed",
  },
];

const articles = [
  {
    title: "Kubernetes Access Control: Authentication, Authorization & Admission Control Demystified",
    excerpt:
      "When you interact with a Kubernetes cluster, three security layers stand between you and your target resource. Think of them as: Authentication = 'Who are you?' Authorization = 'Are you allowed?' Admission Control = 'Is this request valid?'",
    url: "https://tiacode.hashnode.dev/kubernetes-access-control-authentication-authorization-admission-control-demystified?utm_source=hashnode&utm_medium=feed",
    platform: "Hashnode · tiacode",
    readTime: "9 min read",
    date: "May 14",
  },
  {
    title: "Why Your Kubernetes Pods Keep Restarting",
    excerpt:
      "Understanding Kubernetes probes. Liveness, Readiness, and Startup probes. Learn why your pods keep restarting and how to fix them with proper probe configuration.",
    url: "https://tiacode.hashnode.dev/why-your-kubernetes-pods-keep-restarting?utm_source=hashnode&utm_medium=feed",
    platform: "Hashnode · tiacode",
    readTime: "10 min read",
    date: "Apr 30",
  },
  {
    title: "From S3 Objects to S3 Files: Why This Shift Actually Matters",
    excerpt:
      "Cloud storage didn't start complex. When Amazon S3 was introduced, its philosophy was simple. 'Everything is an object.' But as systems evolved, the shift from objects to files changed how we think about cloud storage.",
    url: "https://tiacode.hashnode.dev/from-s3-objects-to-s3-files-why-this-shift-actually-matters?utm_source=hashnode&utm_medium=feed",
    platform: "Hashnode · tiacode",
    readTime: "4 min read",
    date: "Apr 16",
  },
  {
    title: "The Hidden Cost of Terraform State (And How to Fix It at Scale)",
    excerpt:
      "Terraform works great until your team scales. One developer, one state file, smooth terraform apply. But as your infrastructure grows, the hidden costs of Terraform state become painfully obvious.",
    url: "https://tiacode.hashnode.dev/the-hidden-cost-of-terraform-state-and-how-to-fix-it-at-scale?utm_source=hashnode&utm_medium=feed",
    platform: "Hashnode · tiacode",
    readTime: "4 min read",
    date: "Apr 9",
  },
];

export default function Projects() {
  const [imageError, setImageError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

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
              <Heading className={styles.sectionTitle}>Work</Heading>
              <Text className={styles.sectionSubtitle}>
                DevOps projects with full Articles. The builds and the stories behind them.
              </Text>

              <TabToggle
                tabs={[
                  { id: "projects", label: "Projects" },
                  { id: "articles", label: "Articles" },
                ]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              <AnimatePresence mode="wait">
                {activeTab === "projects" ? (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={styles.projectsList}
                  >
                    {projects.map((project, index) => (
                      <Box key={index} className={styles.projectCard}>
                        <Text className={styles.projectTitle}>{project.title}</Text>

                        <Box className={styles.experienceTech} style={{ marginTop: 0, paddingTop: 0, borderTop: "none", marginBottom: "1rem" }}>
                          {project.technologies.map((tech, i) => (
                            <span key={i} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </Box>

                        <ul className={styles.projectBullets}>
                          {project.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>

                        <Box className={styles.projectLinks}>
                          <ChakraLink href={project.githubUrl} isExternal className={styles.projectLink}>
                            GitHub →
                          </ChakraLink>
                          <ChakraLink href={project.articleUrl} isExternal className={styles.projectLink}>
                            Read Article →
                          </ChakraLink>
                        </Box>
                      </Box>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="articles"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={styles.articlesList}
                  >
                    {articles.map((article, index) => (
                      <ChakraLink
                        key={index}
                        href={article.url}
                        isExternal
                        className={styles.articleCard}
                        _hover={{ textDecoration: "none" }}
                      >
                        <Text className={styles.articleIndex}>
                          {String(index + 1).padStart(2, "0")}
                        </Text>
                        <Box className={styles.articleContent}>
                          <Box display="flex" alignItems="center" gap="8px" flexWrap="wrap" mb="4px" mt="4px">
                            <Text className={styles.articleDate}>{article.date}</Text>
                            <Text className={styles.articleReadTime}>· {article.readTime}</Text>
                          </Box>
                          <Text className={styles.articleTitle}>{article.title}</Text>
                          <Text className={styles.articleExcerpt}>{article.excerpt}</Text>
                          <Text className={styles.articleMeta}>{article.platform}</Text>
                        </Box>
                      </ChakraLink>
                    ))}

                    <Box mt={4} textAlign="center">
                      <ChakraLink
                        href="https://tiacode.hashnode.dev"
                        isExternal
                        className={styles.projectLink}
                        fontSize="0.9rem"
                      >
                        View all articles on Hashnode →
                      </ChakraLink>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
