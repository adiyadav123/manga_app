  "use client";

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
      };

      fetchChapter();
    });

    return <div>ChapterReadingPage: {mangaId}</div>;
  };

  export default ChapterReadingPage;

