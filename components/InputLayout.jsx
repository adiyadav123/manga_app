"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon, ReloadIcon  } from "@radix-ui/react-icons";
import { Toast } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import MangaCard from "./MangaCard";
import { BackgroundBeams, FlipWords } from "./flip_words";
import { useRouter } from "next/navigation";

const InputLayout = () => {
  

  const router = useRouter();


  const searchAlt = ["Browse", "Search", "Find", "Discover", "Explore"];
  let famousManga = [
    "Naruto",
    "One Piece",
    "Dragon Ball",
    "Attack on Titan",
    "Death Note",
    "My Hero Academia",
    "Fullmetal Alchemist",
    "Bleach",
    "Demon Slayer: Kimetsu no Yaiba",
    "One Punch Man",
    "Tokyo Ghoul",
    "Hunter x Hunter",
    "JoJo's Bizarre Adventure",
    "Sword Art Online",
    "Black Clover",
  ];

  let rand = Math.round(Math.random() * (famousManga.length - 1));
  const { toast } = useToast();

  const [MangaInput, setMangaInput] = useState("");
  const [Manga, setManga] = useState();
  const [IsButtonClicked, setIsButtonClicked] = useState();

  const mangaInput = (e) => {
    setMangaInput(e.target.value);
  };

  const searchManga = useCallback(
    async (title) => {
      if (!title)
        return toast({
          title: "Uh oh!",
          description: "Please enter a manga name",
        });

      setIsButtonClicked(false);

      const response = await fetch("https://mangafam.vercel.app/api/manga/full", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: title,
        }),
      });

      const data = await response.json().then((data) => {
        setManga(data.data);
      });
      setIsButtonClicked(true);
    },
    [toast]
  );

  useEffect(() => {
    searchManga(famousManga[rand]);
  }, []);


  const chapterPush = (mangaId) => {
    router.push(`/read/${mangaId}`)
  }

  return (
    <div className=" flex items-center justify-center w-full flex-col">
    <a name="browse"></a>
      <h1 className="lg:text-[60px] p-[20px] pt-[40px] sm:text-[40px]"><FlipWords words={searchAlt} duration={1000} /></h1>
      <div className="w-full flex items-center justify-center p-2 ">
        <Input
          placeholder="Search your anime by name"
          className="rounded-[10px]"
          value={MangaInput}
          onChange={mangaInput}
        />
        {IsButtonClicked ? (
          <Button
            className=" m-[10px] rounded-[10px]"
            onClick={() => {
              searchManga(MangaInput);
            }}
          >
            {" "}
            <MagnifyingGlassIcon /> Search
          </Button>
        ) : (
          <Button disabled
            className=" m-[10px] rounded-[10px]"
            onClick={() => {
              searchManga(MangaInput);
            }}
          >
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Searching
          </Button>
        )}
      </div>
      <div className="w-full flex items-center justify-center h-auto">
        {Manga?.length > 0 ? (
          <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-2 w-full">
            {Manga.map((manga) => (
              <div key={manga.id} className="p-[10px]" onClick={() => {
                chapterPush(manga.id)
              }}>
                <MangaCard manga={manga} />
              </div>
            ))}
          </div>
        ) : (
          <div>Searching something best for you...</div>
        )}
      </div>
    </div>
    
  );
};

export default InputLayout;
