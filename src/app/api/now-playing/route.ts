import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

// Helper to clean up the parsed XML object from xml2js
const simplifyXmlObject = (obj: any) => {
    const newObj: { [key: string]: string } = {};
    for (const key in obj) {
        if (Array.isArray(obj[key]) && obj[key].length > 0) {
            newObj[key] = obj[key][0];
        }
    }
    return newObj;
}

export async function GET() {
  const API_URL = 'https://vox.svrdedicado.org/api/g1.gu-bOzWLWFRERPvb1knHAXnkRixGCHaN179_q-g9h9I';

  try {
    const response = await fetch(API_URL, {
        next: { revalidate: 10 } // Revalidate every 10 seconds to get fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch streaming data: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const parsedData = await parseStringPromise(xmlText);
    
    // The PHP example suggests direct property access, which in xml2js usually means the properties are inside a root object. Assuming the root is `radio`.
    if (parsedData && parsedData.radio) {
        const streamInfo = simplifyXmlObject(parsedData.radio);
        return NextResponse.json(streamInfo);
    }

    throw new Error('Could not parse streaming data from XML.');

  } catch (error) {
    console.error('Error fetching streaming API:', error);
    return NextResponse.json(
      { error: 'Could not fetch streaming information.' },
      { status: 500 }
    );
  }
}
