import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const obj = await request.json();
  if (!obj.id) {
    return NextResponse.json({
      error: "Please enter a manga name",
    });
  }

  const { id } = obj;

  const res = await axios({
    method: "GET",
    url: `https://api.mangadex.org/manga/${id}/feed`,
    params: {
      translatedLanguage: ["en"],
    },
  });
  const data = res.data.data.map((chapter) => {
    return {
      id: chapter.id,
      chapter: chapter.attributes.chapter,
      title: chapter.attributes.title,
      volume: chapter.attributes.volume,
      hash: chapter.attributes.hash,
      pages: chapter.attributes.pages,
    };
  });

  // filter chapter by chapter number
  const chapter = data.filter((chapter) => {
    return chapter.chapter === "1";
  });

  return NextResponse.json(
    {
      chapter_id: chapter,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
