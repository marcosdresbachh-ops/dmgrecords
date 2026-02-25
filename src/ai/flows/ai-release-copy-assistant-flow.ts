'use server';
/**
 * @fileOverview An AI-powered assistant for DMG Records marketing staff to generate compelling marketing blurbs and social media captions for new music releases.
 *
 * - generateReleaseCopy - A function that generates marketing copy based on music release details.
 * - ReleaseCopyAssistantInput - The input type for the generateReleaseCopy function.
 * - ReleaseCopyAssistantOutput - The return type for the generateReleaseCopy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ReleaseCopyAssistantInputSchema = z.object({
  trackName: z.string().describe('The name of the music track.'),
  artistName: z.string().describe('The name of the artist.'),
  genre: z.string().describe('The musical genre of the track (e.g., Pop, Hip-Hop, R&B).'),
  mood: z.string().describe('The emotional mood or vibe of the track (e.g., energetic, melancholy, upbeat, introspective).'),
  keyDetails: z.string().optional().describe('Optional additional details about the release (e.g., features a guest vocalist, first single from upcoming album, perfect for summer nights).'),
});
export type ReleaseCopyAssistantInput = z.infer<typeof ReleaseCopyAssistantInputSchema>;

const ReleaseCopyAssistantOutputSchema = z.object({
  marketingBlurb: z.string().describe('A detailed and compelling marketing blurb suitable for press releases, website announcements, or official descriptions of the music release. It should be at least 3-4 sentences long and highlight the track\'s unique qualities and target audience.'),
  socialMediaCaption: z.string().describe('A concise and catchy social media caption, optimized for platforms like Instagram, X (formerly Twitter), or Facebook. It should be engaging, include emojis where appropriate, and encourage listener interaction. It should be no more than 2-3 sentences.'),
  hashtags: z.array(z.string()).describe('An array of 5-10 relevant and trending hashtags that will increase the discoverability of the music release on social media. Each hashtag should be a string without the \'#\' symbol.'),
});
export type ReleaseCopyAssistantOutput = z.infer<typeof ReleaseCopyAssistantOutputSchema>;

export async function generateReleaseCopy(input: ReleaseCopyAssistantInput): Promise<ReleaseCopyAssistantOutput> {
  return aiReleaseCopyAssistantFlow(input);
}

const aiReleaseCopyAssistantPrompt = ai.definePrompt({
  name: 'aiReleaseCopyAssistantPrompt',
  input: { schema: ReleaseCopyAssistantInputSchema },
  output: { schema: ReleaseCopyAssistantOutputSchema },
  prompt: `You are an expert music marketing assistant for DMG Records, specializing in creating compelling promotional content for new music releases. Your task is to generate a marketing blurb, a social media caption, and relevant hashtags based on the provided track details.

Consider the following information for the new release:
Track Name: {{{trackName}}}
Artist: {{{artistName}}}
Genre: {{{genre}}}
Mood/Vibe: {{{mood}}}
{{#if keyDetails}}
Additional Key Details: {{{keyDetails}}}
{{/if}}

Please generate the content in JSON format according to the output schema. Ensure the language is engaging, professional, and captures the essence of the music.`,
});

const aiReleaseCopyAssistantFlow = ai.defineFlow(
  {
    name: 'aiReleaseCopyAssistantFlow',
    inputSchema: ReleaseCopyAssistantInputSchema,
    outputSchema: ReleaseCopyAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await aiReleaseCopyAssistantPrompt(input);
    return output!;
  }
);
