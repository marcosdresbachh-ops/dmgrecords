'use server';
/**
 * @fileOverview Fluxo de IA para gerar prompts detalhados para artes de capa de CD/Single.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CoverPromptInputSchema = z.object({
  musicTitle: z.string().describe('Título da música ou álbum'),
  genre: z.string().describe('Gênero musical'),
  mood: z.string().describe('Vibe/Clima (ex: sombrio, neon, ensolarado, melancólico)'),
  visualElements: z.string().describe('Elementos visuais desejados (ex: carros, floresta, estética retro)'),
});
export type CoverPromptInput = z.infer<typeof CoverPromptInputSchema>;

const CoverPromptOutputSchema = z.object({
  midjourneyPrompt: z.string().describe('Prompt otimizado para Midjourney'),
  dallePrompt: z.string().describe('Prompt otimizado para DALL-E/Bing Image Creator'),
  visualDescription: z.string().describe('Descrição da cena em português para o artista'),
});
export type CoverPromptOutput = z.infer<typeof CoverPromptOutputSchema>;

export async function generateCoverPrompt(input: CoverPromptInput): Promise<CoverPromptOutput> {
  return aiCoverPromptFlow(input);
}

const aiCoverPromptPrompt = ai.definePrompt({
  name: 'aiCoverPromptPrompt',
  input: { schema: CoverPromptInputSchema },
  output: { schema: CoverPromptOutputSchema },
  prompt: `Você é um diretor de arte da DMG Records. Sua tarefa é criar prompts de comando para geradores de imagem (IA) para criar a capa do projeto "{{{musicTitle}}}".

Contexto:
- Gênero: {{{genre}}}
- Mood: {{{mood}}}
- Elementos: {{{visualElements}}}

Crie prompts em inglês que incluam:
- Estilo artístico (fotografia cinematográfica, pintura a óleo, 3D render, etc.)
- Configurações de iluminação e cor.
- Proporção (aspect ratio).
- Referências de qualidade (8k, high detail).`,
});

const aiCoverPromptFlow = ai.defineFlow(
  {
    name: 'aiCoverPromptFlow',
    inputSchema: CoverPromptInputSchema,
    outputSchema: CoverPromptOutputSchema,
  },
  async (input) => {
    const { output } = await aiCoverPromptPrompt(input);
    return output!;
  }
);
