"use client";

import ChapterHead from "@/components/ChapterHead";
import { FloatingNav } from "@/components/ui/floating_navbar";
import { HomeIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";

const ChapterReadingPage = ({ params }) => {
  const mangaId = params.chapter[0];

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Browse",
      link: "#browse",
      icon: (
        <MagnifyingGlassIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems} />
      <ChapterHead mangaId={mangaId} />
    </div>
  );
};

export default ChapterReadingPage;
