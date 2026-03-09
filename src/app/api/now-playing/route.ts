import { NextResponse } from 'next/server';

export async function GET() {
  const API_URL = process.env.NEXT_PUBLIC_RADIO_API_URL;

  if (!API_URL) {
    console.error('Error: NEXT_PUBLIC_RADIO_API_URL environment variable is not set.');
    return NextResponse.json(
      { error: 'Radio API URL not configured on the server.' },
      { status: 500 }
    );
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
    return NextResponse.json(
      { error: 'Could not fetch or parse streaming information.' },
      { status: 500 }
    );
  }
}
