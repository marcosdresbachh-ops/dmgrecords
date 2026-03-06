import { NextResponse } from 'next/server';

export async function GET() {
  const API_URL = 'https://vox.svrdedicado.org/api-json/g1.gu-bOzWLWFRERPvb1knHAXnkRixGCHaN179_q-g9h9I';

  try {
    const response = await fetch(API_URL, {
        next: { revalidate: 10 } // Revalidate every 10 seconds to get fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch streaming data: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.error('Error fetching streaming API:', error);
    return NextResponse.json(
      { error: 'Could not fetch streaming information.' },
      { status: 500 }
    );
  }
}
