import { NextResponse } from "next/server";

export async function POST(request) {
    const nameObj = await request.json();
    if (!nameObj.name) {
        return NextResponse.json({
            error: "Please enter a manga name"
        }, {
            status: 400
        });
    }
    const name = nameObj.name;
    const response = await fetch('https://mangafam.vercel.app/api/manga/search', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
        })
    });
    const data = await response.json();
    const mangaData = data.data;
    const mangaIds = mangaData.map(manga => manga.id);
    const coverIds = mangaData.map(manga => manga.coverArt.id);
    let coverURLs = [];
    for (let i = 0; i < mangaData.length; i++) {
        const coverResponse = await fetch(`https://api.mangadex.org/cover/${coverIds[i]}`);
        const coverData = await coverResponse.json();
        const cover = coverData.data.attributes.fileName;
        coverURLs.push(`https://uploads.mangadex.org/covers/${mangaIds[i]}/${cover}`);
    }

    mangaData.forEach((manga, i) => {
        manga.coverURL = coverURLs[i];
    });



    
    return NextResponse.json({
        data: mangaData
    })
}