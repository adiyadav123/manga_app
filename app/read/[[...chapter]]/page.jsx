"use client";

import ChapterPage from "@/components/ChapterPage";
import React, { useEffect } from "react";

const ChapterReadingPage = ({ params }) => {
  const mangaId = params.chapter[0];

  useEffect(() => {
    const fetchChapter = async () => {
      const res = await fetch("/api/chapter/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: mangaId }),
      });

      const data = await res.json();

      console.log(data);
      console.log(process.env.NEXT_PUBLIC_DOMAIN)
    };

    fetchChapter();
  });

  return (
    <div>
      <ChapterPage mangaId={mangaId} />
    </div>
  );
};

export default ChapterReadingPage;
