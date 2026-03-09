import { NextResponse } from 'next/server';

export async function GET() {
  const API_URL = process.env.NEXT_PUBLIC_RADIO_API_URL;

  if (!API_URL) {
    console.error('Error: NEXT_PUBLIC_RADIO_API_URL environment variable is not set.');
    // Return a default object with a 200 status to prevent client-side fetch failure
    return NextResponse.json({
        musica_atual: 'DMG Records',
        ouvintes_conectados: '0',
        capa_musica: '',
        titulo: 'Rádio Offline',
        error: 'Radio API URL not configured on the server.'
    }, { status: 200 });
  }

  try {
    const response = await fetch(API_URL, {
        next: { revalidate: 10 } // Revalidate every 10 seconds to get fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch streaming data: ${response.statusText}`);
    }

    const text = await response.text();
    // The response is JSONP, wrapped in parentheses, e.g., '({...});'. We need to extract the JSON part.
    const jsonString = text.substring(text.indexOf('(') + 1, text.lastIndexOf(')'));
    
    const data = JSON.parse(jsonString);

    return NextResponse.json(data);

  } catch (error: any) {
    console.error('Error fetching or parsing streaming API:', error);
    // Return a default object with a 200 status to prevent client-side fetch errors.
    // The client can then handle the display of this default state.
    return NextResponse.json({
        musica_atual: 'DMG Records',
        ouvintes_conectados: '0',
        capa_musica: '',
        titulo: 'Rádio Offline',
        error: 'Could not fetch or parse streaming information.'
    }, { status: 200 });
  }
}
