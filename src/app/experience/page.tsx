"use client";

import { Box, VStack, Text, Heading, Link as ChakraLink, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import MobileMenu from "../components/MobileMenu";
import TabToggle from "../components/TabToggle";

interface Experience {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  achievements: string[];
  technologies: string[];
  link?: string;
  linkText?: string;
}

const devopsExperiences: Experience[] = [
  {
    role: "DevOps Engineer",
    company: "EcoLoop",
    location: "Remote",
    type: "Project",
    period: "Apr 2026 – Present",
    link: "https://ecoloop-frontend-link.onrender.com",
    linkText: "View platform",
    achievements: [
      "Designed and provisioned complete AWS infrastructure using Terraform, including VPC with public/private subnets, Internet Gateway, EKS cluster, RDS PostgreSQL, S3 bucket, and ECR repositories.",
      "Implemented IRSA (IAM Roles for Service Accounts) for ESO and backend application, enabling pod-level IAM permissions without long-term credentials.",
      "Set up External Secrets Operator (ESO) to sync secrets from AWS Secrets Manager and SSM Parameter Store to Kubernetes, ensuring secrets never touch Git.",
      "Configured OIDC authentication between GitHub Actions and AWS, eliminating the need for hardcoded AWS credentials in CI/CD pipelines.",
      "Built and maintained Kubernetes manifests for backend and AI service deployments, including HPA for auto-scaling and liveness/readiness probes.",
      "Debugged and resolved complex infrastructure issues including VPC dependencies, S3 bucket versioning, ESO ConfigMap vs Secret confusion, and PyTorch model loading errors.",
      "Implemented secure network architecture with ALB in public subnets and EKS worker nodes in private subnets.",
    ],
    technologies: ["Terraform", "AWS EKS", "Kubernetes", "GitHub Actions", "OIDC", "IRSA", "External Secrets Operator", "RDS", "S3", "ECR", "VPC"],
  },
  {
    role: "DevOps Engineer",
    company: "Movva",
    location: "Remote, United States",
    type: "Full-time",
    period: "Jan 2025 – Present",
    link: "https://getmovva.com",
    linkText: "View Platform",
    achievements: [
      "Designed and operated end-to-end CI/CD pipelines using GitHub Actions and Jenkins to automate build, test, containerization, and deployment workflows on AWS.",
      "Provisioned and managed AWS infrastructure (EC2, S3, IAM, VPC) using Terraform, enabling repeatable and version-controlled infrastructure deployments.",
      "Implemented configuration management and server automation with Ansible, reducing configuration drift across environments.",
      "Built and deployed Dockerized application architectures, ensuring environment parity across development, staging, and production systems.",
      "Supported production infrastructure reliability through monitoring, troubleshooting, and deployment optimization.",
    ],
    technologies: ["GitHub Actions", "Jenkins", "Terraform", "Ansible", "Docker", "AWS", "EC2", "S3", "IAM", "VPC"],
  },
];

const softwareExperiences: Experience[] = [
  
  {
    role: "Backend Engineer",
    company: "EcoLoop",
    location: "Remote",
    type: "Project",
    period: "Apr 2026 – Present",
    
    achievements: [
      "Built RESTful API with Node.js, Express, and Prisma ORM, handling user authentication, listing management, and AI service integration.",
      "Implemented JWT-based authentication with refresh tokens and role-based access control for sellers and buyers.",
      "Integrated AWS S3 for image uploads with secure pre-signed URLs, enabling efficient storage and retrieval of listing images.",
      "Connected backend to AI service via internal Kubernetes DNS, enabling asynchronous waste detection and carbon footprint calculation.",
      "Designed PostgreSQL database schema with Prisma, including User, Listing, and Session models with proper relationships and indexes.",
      "Implemented comprehensive error handling, request validation, and structured logging for production observability.",
      "Created health check endpoints and readiness probes for Kubernetes deployment.",
    ],
    technologies: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "JWT", "AWS S3", "REST API"]
  },
  {
    role: "Software Engineer",
    company: "myimoapp",
    location: "Remote",
    type: "Contract",
    period: "Feb 2024 – Dec 2024",
    link: "https://myimoapp.com",
    linkText: "Visit Platform",
    achievements: [
      "Developed and maintained responsive frontend features and user interfaces for web applications using modern JavaScript frameworks.",
      "Collaborated with backend engineers and designers to implement scalable, user-focused product features.",
      "Improved application usability, responsiveness, and overall user experience across different devices and screen sizes.",
      "Diagnosed and resolved frontend bugs, UI inconsistencies, and performance issues to improve application stability.",
    ],
    technologies: ["JavaScript", "React", "TypeScript", "Responsive Design"],
  },
  {
    role: "Software Developer",
    company: "AyaHq",
    location: "Delaware, US (Remote)",
    type: "Contract",
    period: "Dec 2022 – Oct 2024",
    link: "https://ayahq.com",
    linkText: "Visit Platform",
    achievements: [
      "Redesigned the company platform, resulting in a 250% increase in inbound leads.",
      "Drove product improvements that enabled hosting 13+ hackathons, onboarding 1,469+ builders, and supporting 7 communities.",
      "Implemented responsive UI designs and enhanced performance using modern software development tools.",
      "Contributed to platform growth, now hosting 150+ projects in the Web3 and blockchain space.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Chakra UI"],
  },
];

export default function Experience() {
  const [imageError, setImageError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("devops");

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

  const experiences = activeTab === "devops" ? devopsExperiences : softwareExperiences;

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
                Two disciplines, one career. Infrastructure automation on one side,
                product engineering on the other.
              </Text>

              <TabToggle
                tabs={[
                  { id: "devops", label: "DevOps & Cloud Engineering" },
                  { id: "software", label: "Software Engineering" },
                ]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={styles.experienceList}
                >
                  {experiences.map((exp, index) => (
                    <Box key={index} className={styles.experienceCard}>
                      <Box className={styles.experienceHeader}>
                        <Box>
                          <Text className={styles.experienceRole}>{exp.role}</Text>
                          <Text className={styles.experienceCompany}>{exp.company}</Text>
                        </Box>
                        <Text className={styles.experiencePeriod}>{exp.period}</Text>
                      </Box>

                      <Box className={styles.experienceMeta}>
                        <Text className={styles.experienceMetaItem}>{exp.location}</Text>
                        <Text className={styles.experienceMetaItem}>·</Text>
                        <Text className={styles.experienceMetaItem}>{exp.type}</Text>
                      </Box>

                      <ul className={styles.experienceAchievements}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>

                      {exp.link && (
                        <ChakraLink href={exp.link} isExternal className={styles.experienceLink}>
                          {exp.linkText} →
                        </ChakraLink>
                      )}

                      <Box className={styles.experienceTech}>
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
