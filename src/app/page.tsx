"use client";
import { motion } from "framer-motion";
// import { Button } from "../../components/ui";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(false);

  // Define animation variants for various components
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen p-8`}
    >
      {/* Animated Title */}
      <motion.div
        className="flex justify-between items-center mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 className="text-4xl font-bold" variants={slideUp}>
          Make beautiful websites
        </motion.h1>
        <motion.div variants={fadeIn}>
          <Button variant="default">Get Started</Button>
        </motion.div>
      </motion.div>

      {/* Animated Cards */}
      <motion.div
        className="grid grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={slideUp}>
          <Card className="p-4">
            <h2 className="text-xl font-semibold">Themeable</h2>
            <p className="text-sm">Fully customizable components.</p>
          </Card>
        </motion.div>
        <motion.div variants={slideUp}>
          <Card className="p-4">
            <h2 className="text-xl font-semibold">Fast</h2>
            <p className="text-sm">Optimized for performance.</p>
          </Card>
        </motion.div>
        <motion.div variants={slideUp}>
          <Card className="p-4">
            <h2 className="text-xl font-semibold">Unique DX</h2>
            <p className="text-sm">Built with developers in mind.</p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Input and Switch with Fade-In Animation */}
      <motion.div
        className="mt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Input placeholder="Search..." className="mb-4" />
        <Switch
          label="Toggle Theme"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </motion.div>
    </div>
  );
}
