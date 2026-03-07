'use server';
/**
 * @fileOverview An AI agent for fetching and categorizing news from Agência do Rádio.
 *
 * - getAgenciaRadioNews - A function that simulates fetching news and returns it categorized.
 * - AgenciaRadioNewsOutput - The return type for the getAgenciaRadioNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Schemas
const ArticleSchema = z.object({
  title: z.string().describe('The headline of the news article.'),
  summary: z.string().describe('A brief, one or two-sentence summary of the article.'),
  category: z.string().describe("The primary category of the news, e.g., 'Economia', 'Saúde', 'Política', 'Cultura', 'Cidades', 'Ciência e Tecnologia', 'Meio Ambiente'."),
  link: z.string().url().describe('The direct URL to the full article.'),
  imageUrl: z.string().url().describe('A relevant image URL for the article.'),
});

const AgenciaRadioNewsOutputSchema = z.object({
  articles: z.array(ArticleSchema).describe('A list of news articles extracted from the source.'),
});
export type AgenciaRadioNewsOutput = z.infer<typeof AgenciaRadioNewsOutputSchema>;

const AgenciaRadioNewsInputSchema = z.object({
  sourceUrl: z.string().url().describe('The URL of the news source to analyze.'),
});
export type AgenciaRadioNewsInput = z.infer<typeof AgenciaRadioNewsInputSchema>;


// Prompt Definition
const agenciaRadioPrompt = ai.definePrompt({
  name: 'agenciaRadioPrompt',
  input: { schema: AgenciaRadioNewsInputSchema },
  output: { schema: AgenciaRadioNewsOutputSchema },
  prompt: `You are an expert news aggregator and content categorizer. Your task is to analyze the content from the provided URL, which is from 'Agência do Rádio' (brasil61.com).

Extract the top 12 latest news articles available on the page. For each article, you must provide:
1.  **title**: The full, original headline of the article.
2.  **summary**: A concise, one or two-sentence summary in Portuguese.
3.  **category**: A single, relevant category from this list: 'Economia', 'Saúde', 'Política', 'Cultura', 'Cidades', 'Ciência e Tecnologia', 'Meio Ambiente'.
4.  **link**: The full, direct URL to the article. You must find the real link on the page.
5.  **imageUrl**: The URL of the main image associated with the article. You must find the real image URL on the page.

Source URL: {{{sourceUrl}}}

Return the response as a JSON object that strictly adheres to the 'AgenciaRadioNewsOutputSchema'. Ensure you provide 12 articles. Do not invent articles; use the real content from the source.
`,
});

// Flow Definition
const agenciaRadioFlow = ai.defineFlow(
  {
    name: 'agenciaRadioFlow',
    inputSchema: AgenciaRadioNewsInputSchema,
    outputSchema: AgenciaRadioNewsOutputSchema,
  },
  async (input) => {
    const {output} = await agenciaRadioPrompt(input);
    if (!output) {
      console.error('Agencia Radio Flow: AI did not return a valid output.');
      return { articles: [] };
    }
    return output;
  }
);

// Wrapper function to be called from Next.js
export async function getAgenciaRadioNews(input: AgenciaRadioNewsInput): Promise<AgenciaRadioNewsOutput> {
  try {
    return await agenciaRadioFlow(input);
  } catch (error) {
    console.error("Error executing getAgenciaRadioNews:", error);
    // Return a default empty state in case of any error from the flow
    return { articles: [] };
  }
}
