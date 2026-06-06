"use client";

import { Box, HStack, Text } from "@chakra-ui/react";
import styles from "../page.module.css";

interface Tab {
  id: string;
  label: string;
}

interface TabToggleProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function TabToggle({ tabs, activeTab, onTabChange }: TabToggleProps) {
  return (
    <HStack className={styles.tabToggle} spacing={0} role="tablist">
      {tabs.map((tab) => (
        <Box
          key={tab.id}
          as="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          <Text fontSize={{ base: "sm", md: "md" }} fontWeight={activeTab === tab.id ? "600" : "500"}>
            {tab.label}
          </Text>
        </Box>
      ))}
    </HStack>
  );
}
