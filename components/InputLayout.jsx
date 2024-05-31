"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Toast } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import MangaCard from "./MangaCard";

const InputLayout = () => {


  const { toast } = useToast();


  const [MangaInput, setMangaInput] = useState("");
  const [Manga, setManga] = useState();

  const mangaInput = (e) => {
    setMangaInput(e.target.value);
  };

  const searchManga = useCallback(async (title) => {
    if (!title) return toast({
      title: "Uh oh!",
      description: "Please enter a manga name",
    });
    
    const response = await fetch('http://localhost:3000/api/manga/full', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: title
      })
    });

    const data = await response.json();
    setManga(data.data);

  }, [toast]);

  useEffect(() => {
    searchManga("Naruto");
  }, [searchManga]);

  return (
    <div className=" flex items-center justify-center w-full flex-col">
      <div className="w-full flex items-center justify-center">
        <Input
          placeholder="Search your anime by name"
          className="rounded-[10px]"
          value={MangaInput}
          onChange={mangaInput}
        />
        <Button className=" m-[10px] rounded-[10px]" onClick={() => {
          searchManga(MangaInput);
        }}>
          {" "}
          <MagnifyingGlassIcon /> Search
        </Button>
      </div>
      <div className="w-full flex items-center justify-center bg-red-700">
        {Manga?.length > 0 ? (
          <div>
            {Manga.map((manga) => (
              <div key={manga.id}>
                <MangaCard manga={manga} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            No manga found
          </div>
        )}
        </div>
    </div>
  );
};

export default InputLayout;
