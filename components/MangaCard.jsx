"use client";

import Image from "next/image";
import React from "react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { ParallaxScroll } from "./ui/parallax_scroll";

const MangaCard = ({manga}) => {

  return (
    <div className=" w-auto p-[10px] rounded-[10px] cursor-pointer flex items-center justify-center">
      <DirectionAwareHover imageUrl={manga.coverURL}>
        <p className="font-bold text-xl">{manga.title}</p>
        <p className="font-normal text-sm">{manga.status} | {manga.createdAt.split('-')[0]}</p>
        <p className="font-normal text-sm">Tags: {manga.tags.join(", ")}</p>
      </DirectionAwareHover>
    </div>
  );
};

export default MangaCard;
