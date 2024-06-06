"use client";

import InputLayout from "@/components/InputLayout";
import { HeroParallaxDemo } from "@/components/Most_Famous";
import { FlipWords } from "@/components/flip_words";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { HomeIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { FloatingNav } from "@/components/ui/floating_navbar";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const words = ["Fam", "Club", "Haven", "Hub", "Vault"];

  useEffect(() => {
    
    const timer = setTimeout(() => {
      gsap.to(window, {
        duration: 2,
        scrollTo: { y: 700}
      })
    }, 2000)

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    {
      name:"Home",
      link: "/",
      icon: <HomeIcon  className="h-4 w-4 text-neutral-500 dark:text-white"/>
    },
    {
      name:"Browse",
      link: "#browse",
      icon: <MagnifyingGlassIcon  className="h-4 w-4 text-neutral-500 dark:text-white"/>
    },
    {
      name:"Home",
      link: "/",
      icon: <HomeIcon  className="h-4 w-4 text-neutral-500 dark:text-white"/>
    },
    {
      name:"Home",
      link: "/",
      icon: <HomeIcon  className="h-4 w-4 text-neutral-500 dark:text-white"/>
    },
  ]

  return (
    <section className="flex items-center justify-center flex-col overflow-x-hidden">
    <FloatingNav navItems={navItems} />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Manga
          <FlipWords words={words} duration={2000} />
        </motion.h1>
      </LampContainer>
      <HeroParallaxDemo />
      <InputLayout />
    </section>
  );
}
