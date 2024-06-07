"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero_parallax";

export function HeroParallaxDemo() {
  return (
    <HeroParallax
      products={products}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
    />
  );
}
export const products = [
  {
    title: "Naruto",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/6b1eb93e-473a-4ab3-9922-1a66d2a29a4a/bb223226-a5ca-457b-8a10-ad3ecaea66be.jpg",
  },
  {
    title: "Jujutsu Kaisen",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/31397254-82f7-445f-a906-5405ff447b97/3b151bcf-7f4e-42fe-9d08-2e89d441b8d7.jpg",
  },
  {
    title: "One Piece",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/a1c7c817-4e59-43b7-9365-09675a149a6f/636e708c-e853-4a60-a795-f9baf82e3b8e.jpg",
  },

  {
    title: "Dragon Ball",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/c62b73e5-0cfb-4aef-9425-60393477ab6c/a992c777-ab8d-477c-8fa3-15e2151be399.jpg",
  },
  {
    title: "Attack on Titan",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/6cc6a02f-60de-4b1a-9789-f698da222495/c10bab97-216a-4380-90cc-d763ecd09f9b.jpg",
  },
  {
    title: "Pluto",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/e171c073-4415-499b-85bc-ea93825127ac/1e9f777a-71eb-4f93-8a35-6dc0205b391f.jpg",
  },
  {
    title: "Death Note",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/bf2fed23-7174-408c-972a-af6d0179fe8e/b1d69511-b6b2-4923-85d9-32c34771cdb3.jpg",
  },
  {
    title: "Pluto",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/e171c073-4415-499b-85bc-ea93825127ac/1e9f777a-71eb-4f93-8a35-6dc0205b391f.jpg",
  },
  {
    title: "Kimetsu no Yaiba Gaiden",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/f25a8b44-0ee1-4025-8c81-f996d887649c/ab6378d4-b1d5-4214-9433-60f702610be9.jpg",
  },
  {
    title: "Dragon Ball",
    link: "/",
    thumbnail:
      "https://uploads.mangadex.org/covers/c62b73e5-0cfb-4aef-9425-60393477ab6c/a992c777-ab8d-477c-8fa3-15e2151be399.jpg",
  },
];
