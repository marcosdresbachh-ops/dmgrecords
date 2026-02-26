'use server';
/**
 * @fileOverview Fluxo de IA para geração de documentos da indústria musical (Bios, Press Releases, etc).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DocGeneratorInputSchema = z.object({
  docType: z.string().describe('Tipo de documento (ex: Press Release, Artist Bio)'),
  artistName: z.string().describe('Nome do artista ou banda'),
  details: z.string().optional().describe('Detalhes adicionais, conquistas, gênero, etc'),
  language: z.string().describe('Idioma do documento'),
});
export type DocGeneratorInput = z.infer<typeof DocGeneratorInputSchema>;

const DocGeneratorOutputSchema = z.object({
  content: z.string().describe('O conteúdo completo do documento gerado.'),
});
export type DocGeneratorOutput = z.infer<typeof DocGeneratorOutputSchema>;

export async function generateMusicDoc(input: DocGeneratorInput): Promise<DocGeneratorOutput> {
  return aiDocGeneratorFlow(input);
}

const aiDocGeneratorPrompt = ai.definePrompt({
  name: 'aiDocGeneratorPrompt',
  input: { schema: DocGeneratorInputSchema },
  output: { schema: DocGeneratorOutputSchema },
  prompt: `Você é um copywriter especialista na indústria musical global.
Sua tarefa é gerar um(a) professional {{{docType}}} para o artista {{{artistName}}}.

Idioma: {{{language}}}
Detalhes: {{{details}}}

Instruções:
1. Seja específico, cativante e profissional.
2. Formate com títulos e parágrafos claros.
3. Não inclua comentários extras, apenas o documento final.`,
});

const aiDocGeneratorFlow = ai.defineFlow(
  {
    name: 'aiDocGeneratorFlow',
    inputSchema: DocGeneratorInputSchema,
    outputSchema: DocGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await aiDocGeneratorPrompt(input);
    return output!;
  }
);
