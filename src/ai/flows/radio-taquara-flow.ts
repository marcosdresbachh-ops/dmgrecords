'use server';
/**
 * @fileOverview An AI agent for fetching and categorizing news from Rádio Taquara.
 *
 * - getRadioTaquaraNews - A function that fetches news and returns it categorized.
 * - RadioTaquaraNewsOutput - The return type for the getRadioTaquaraNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Schemas
const ArticleSchema = z.object({
  title: z.string().describe('The headline of the news article.'),
  summary: z.string().describe('A brief, one or two-sentence summary of the article in Portuguese.'),
  category: z.string().describe("The primary category of the news, e.g., 'Polícia', 'Região', 'Esporte', 'Geral', 'Política', 'Entretenimento'."),
  link: z.string().url().describe('The direct URL to the full article.'),
  imageUrl: z.string().url().describe('A relevant image URL for the article.'),
});

const RadioTaquaraNewsOutputSchema = z.object({
  articles: z.array(ArticleSchema).describe('A list of news articles extracted from the source.'),
});
export type RadioTaquaraNewsOutput = z.infer<typeof RadioTaquaraNewsOutputSchema>;

const RadioTaquaraNewsInputSchema = z.object({
  sourceUrl: z.string().url().describe('The URL of the news source to analyze.'),
});
export type RadioTaquaraNewsInput = z.infer<typeof RadioTaquaraNewsInputSchema>;


// Prompt Definition
const radioTaquaraPrompt = ai.definePrompt({
  name: 'radioTaquaraPrompt',
  input: { schema: RadioTaquaraNewsInputSchema },
  output: { schema: RadioTaquaraNewsOutputSchema },
  prompt: `You are an expert news aggregator. Your task is to analyze the content from the provided URL, which is from 'Rádio Taquara' (radiotaquara.com.br).

Extract the top 12 latest news articles available on the page. For each article, you must provide:
1.  **title**: The full, original headline of the article.
2.  **summary**: A concise, one or two-sentence summary in Portuguese.
3.  **category**: A single, relevant category from this list: 'Polícia', 'Região', 'Esporte', 'Geral', 'Política', 'Entretenimento'.
4.  **link**: The full, direct URL to the article. You must find the real link on the page.
5.  **imageUrl**: The URL of the main image associated with the article. You must find the real image URL on the page.

Source URL: {{{sourceUrl}}}

Return the response as a JSON object that strictly adheres to the 'RadioTaquaraNewsOutputSchema'. Ensure you provide 12 articles. Do not invent articles; use the real content from the source.
`,
});

// Flow Definition
const radioTaquaraFlow = ai.defineFlow(
  {
    name: 'radioTaquaraFlow',
    inputSchema: RadioTaquaraNewsInputSchema,
    outputSchema: RadioTaquaraNewsOutputSchema,
  },
  async (input) => {
    const {output} = await radioTaquaraPrompt(input);
    return output!;
  }
);

// Wrapper function
export async function getRadioTaquaraNews(input: RadioTaquaraNewsInput): Promise<RadioTaquaraNewsOutput> {
  return radioTaquaraFlow(input);
}
