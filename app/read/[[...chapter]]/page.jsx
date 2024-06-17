"use client";

import React, { useEffect } from "react";
import { HomeIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

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

  return <div>ChapterReadingPage: {mangaId}</div>;
};

export default ChapterReadingPage;
