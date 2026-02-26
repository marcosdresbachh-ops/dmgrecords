'use server';
/**
 * @fileOverview Fluxo de IA para geração de minutas de contrato musical.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContractGeneratorInputSchema = z.object({
  artistName: z.string().describe('Nome do artista ou banda'),
  clientName: z.string().describe('Nome do contratante ou parceiro'),
  contractType: z.enum(['Produção Musical', 'Distribuição Digital', 'Licenciamento de Obra', 'Sessão de Estúdio']).describe('Tipo de contrato'),
  paymentDetails: z.string().describe('Detalhes sobre valores e forma de pagamento'),
  validity: z.string().describe('Prazo de validade ou duração do contrato'),
});
export type ContractGeneratorInput = z.infer<typeof ContractGeneratorInputSchema>;

const ContractGeneratorOutputSchema = z.object({
  contractText: z.string().describe('O texto completo da minuta do contrato formatado profissionalmente.'),
  clauses: z.array(z.string()).describe('Lista de cláusulas principais incluídas para destaque.'),
});
export type ContractGeneratorOutput = z.infer<typeof ContractGeneratorOutputSchema>;

export async function generateContract(input: ContractGeneratorInput): Promise<ContractGeneratorOutput> {
  return aiContractGeneratorFlow(input);
}

const aiContractGeneratorPrompt = ai.definePrompt({
  name: 'aiContractGeneratorPrompt',
  input: { schema: ContractGeneratorInputSchema },
  output: { schema: ContractGeneratorOutputSchema },
  prompt: `Você é um consultor jurídico especializado na indústria musical brasileira (DMG Records).
Sua tarefa é gerar uma minuta de contrato de {{{contractType}}} entre o Artista ({{{artistName}}}) e o Contratante ({{{clientName}}}).

Detalhes Importantes:
- Pagamento: {{{paymentDetails}}}
- Validade: {{{validity}}}

Instruções:
1. Use linguagem jurídica formal mas clara.
2. Inclua cláusulas de direitos autorais, confidencialidade e foro.
3. Formate o texto com parágrafos e numeração de cláusulas.
4. O contrato deve seguir as leis brasileiras de direitos autorais.`,
});

const aiContractGeneratorFlow = ai.defineFlow(
  {
    name: 'aiContractGeneratorFlow',
    inputSchema: ContractGeneratorInputSchema,
    outputSchema: ContractGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await aiContractGeneratorPrompt(input);
    return output!;
  }
);
