import { NextResponse } from "next/server";
import axios from "axios";
import corsMiddleware from "../../_middlewares/cors";

export async function POST(request){
    await corsMiddleware(request, NextResponse);
    const nameObj = await request.json();
    if (!nameObj) return NextResponse.error("Name is required", { status: 400 });
    const name = nameObj.name;
    if(!name) return NextResponse.error("Name is required", { status: 400 });


    const baseURL = 'https://api.mangadex.org';

    const resp = await axios({
        method: 'GET',
        url: `${baseURL}/manga`,
        params: {
            title: name
        }
    });

    let wholeData = resp.data.data;
    
    let data = resp.data.data.map((manga) => {
        return {
            id: manga.id,
            title: manga.attributes.title.en,
            description: manga.attributes.description.en,
            status: manga.attributes.status,
            tags: manga.attributes.tags.map((tag) => tag.attributes.name.en),
            lastChapter: manga.attributes.lastChapter,
            lastVolume: manga.attributes.lastVolume,
            coverArt: manga.relationships.find((rel) => rel.type === 'cover_art'),
            createdAt: manga.attributes.createdAt,
        }
    });

    

    return NextResponse.json({
        data: data,
        wholeData: wholeData
    });
}