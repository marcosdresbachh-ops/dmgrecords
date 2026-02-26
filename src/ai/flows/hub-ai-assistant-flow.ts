'use server';
/**
 * @fileOverview Fluxo de IA unificado para o HUB-DMG.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const HubAIAssistantInputSchema = z.object({
  toolType: z.enum(['Lyrics', 'Document', 'Contract', 'Pitch']),
  userInput: z.string().describe('O que o usuário deseja gerar'),
  artistContext: z.string().optional().describe('Contexto do artista (nome, gênero, etc)'),
});
export type HubAIAssistantInput = z.infer<typeof HubAIAssistantInputSchema>;

const HubAIAssistantOutputSchema = z.object({
  content: z.string().describe('O conteúdo gerado pela IA'),
});
export type HubAIAssistantOutput = z.infer<typeof HubAIAssistantOutputSchema>;

export async function hubAIAssistant(input: HubAIAssistantInput): Promise<HubAIAssistantOutput> {
  return hubAIAssistantFlow(input);
}

const hubAIAssistantPrompt = ai.definePrompt({
  name: 'hubAIAssistantPrompt',
  input: { schema: HubAIAssistantInputSchema },
  output: { schema: HubAIAssistantOutputSchema },
  prompt: `Você é um assistente sênior da DMG Records. Sua tarefa é ajudar o artista com a ferramenta: {{{toolType}}}.

Contexto do Artista: {{{artistContext}}}
Pedido do Usuário: {{{userInput}}}

Instruções baseadas na ferramenta:
- Lyrics: Escreva letras criativas, versos, ganchos e pontes. Seja poético e musical.
- Document: Gere comunicados de imprensa, biografias ou cartas de apresentação profissionais.
- Contract: Escreva minutas de contratos claros (ex: split sheets, licenciamento).
- Pitch: Escreva textos de pitch para Spotify, gravadoras ou legendas de impacto.

Regras:
1. Use o idioma do pedido do usuário (Português ou Inglês).
2. Saída apenas com o conteúdo solicitado, sem comentários extras.
3. Formate profissionalmente.`,
});

const hubAIAssistantFlow = ai.defineFlow(
  {
    name: 'hubAIAssistantFlow',
    inputSchema: HubAIAssistantInputSchema,
    outputSchema: HubAIAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await hubAIAssistantPrompt(input);
    return output!;
  }
);
