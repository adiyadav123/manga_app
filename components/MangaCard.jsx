"use client";

import Image from "next/image";
import React from "react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const MangaCard = ({manga}) => {
  const imgURL =
    "https://uploads.mangadex.org/covers/31397254-82f7-445f-a906-5405ff447b97/3b151bcf-7f4e-42fe-9d08-2e89d441b8d7.jpg";
  return (
    <div className=" w-auto p-[10px] rounded-[10px] bg-slate-900">
      <DirectionAwareHover imageUrl={imgURL}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
};

export default MangaCard;
