import { NextResponse } from "next/server";

export async function POST(request) {
    const nameObject = await request.json();
    if (!nameObject.name){
        return NextResponse.json({
            error: "Please enter a manga name"
        }, {status: 400})
    }

    const name = nameObject.name;
    const baseURL = "https://api.mangadex.org";

    const response = await fetch('http://localhost:3000/api/manga/search', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name})
    });

    const data = await response.json();
    const mangaId = data.data[0].id;
    const coverId = data.data[0].coverArt.id;

    const coverResponse = await fetch(`${baseURL}/cover/${coverId}`);
    const coverData = await coverResponse.json();
    const cover = coverData.data.attributes.fileName;

    return NextResponse.json({
        cover: `https://uploads.mangadex.org/covers/${mangaId}/${cover}`
    });

}