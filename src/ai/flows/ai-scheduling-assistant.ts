'use server';
/**
 * @fileOverview An AI-powered assistant for radio station scheduling.
 *
 * - scheduleBroadcast - A function that suggests optimal broadcast schedules based on historical data and station guidelines.
 * - AISchedulingAssistantInput - The input type for the scheduleBroadcast function.
 * - AISchedulingAssistantOutput - The return type for the scheduleBroadcast function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema Definition
const AISchedulingAssistantInputSchema = z.object({
  historicalData: z.string().describe('A summary of historical broadcast data, including past program schedules, ad placements, and any relevant performance metrics.').default('No historical data provided.'),
  stationGuidelines: z.string().describe('Station guidelines and rules for scheduling programs and ad placements.').default('No specific station guidelines provided.'),
  currentScheduleContext: z.string().optional().describe('The current or partial schedule that needs optimization or completion. Provide program names, durations, and ad slots if available.'),
  schedulingRequest: z.string().describe('A specific request from the user for scheduling, e.g., "Suggest optimal programs for the morning block next week", "Place ads for a new campaign throughout the day", "Complete the schedule for tomorrow evening".'),
});
export type AISchedulingAssistantInput = z.infer<typeof AISchedulingAssistantInputSchema>;

// Output Schema Definition
const ScheduleItemSchema = z.object({
  type: z.enum(['program', 'ad_placement']).describe('The type of schedule item, either "program" or "ad_placement".'),
  name: z.string().describe('The name of the program or ad campaign.'),
  startTime: z.string().describe('The start time of the item in HH:MM 24-hour format (e.g., "09:00").'),
  endTime: z.string().describe('The end time of the item in HH:MM 24-hour format (e.g., "10:30").'),
  durationMinutes: z.number().int().positive().describe('The duration of the item in minutes.'),
  justification: z.string().optional().describe('A brief explanation for why this item is scheduled at this time, referencing historical data or guidelines.'),
});

const AISchedulingAssistantOutputSchema = z.object({
  suggestedSchedule: z.array(ScheduleItemSchema).describe('A list of suggested schedule items, including programs and ad placements.'),
  overallNotes: z.string().optional().describe('Any overall notes or recommendations regarding the suggested schedule.'),
});
export type AISchedulingAssistantOutput = z.infer<typeof AISchedulingAssistantOutputSchema>;

// Prompt Definition
const aiSchedulingPrompt = ai.definePrompt({
  name: 'aiSchedulingPrompt',
  input: {schema: AISchedulingAssistantInputSchema},
  output: {schema: AISchedulingAssistantOutputSchema},
  prompt: `You are an AI-powered radio station scheduling assistant. Your task is to analyze historical broadcast data and station guidelines to suggest an optimal schedule for programs and ad placements.

Here is the information you need to consider:

Historical Broadcast Data Summary:
{{{historicalData}}}

Station Guidelines:
{{{stationGuidelines}}}

{{#if currentScheduleContext}}
Current Schedule Context (for optimization or completion):
{{{currentScheduleContext}}}
{{/if}}

User's Scheduling Request:
{{{schedulingRequest}}}

Based on the provided information, generate an optimal schedule.
When suggesting the schedule:
- Ensure programs and ad placements are compliant with station guidelines.
- Consider historical performance data to optimize audience engagement and ad revenue.
- Provide a clear start and end time for each item.
- For each item, include a brief justification for its placement.
- Use HH:MM 24-hour format (e.g., "09:00") for all times.
- Ensure there are no overlaps in the schedule.
- Calculate and provide the durationMinutes for each item based on its start and end times.

Output the schedule as a JSON object with two fields: 'suggestedSchedule' which is an array of schedule items, and 'overallNotes' for any general observations or recommendations. Ensure the output strictly adheres to the AISchedulingAssistantOutputSchema.`,
});

// Flow Definition
const aiSchedulingAssistantFlow = ai.defineFlow(
  {
    name: 'aiSchedulingAssistantFlow',
    inputSchema: AISchedulingAssistantInputSchema,
    outputSchema: AISchedulingAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await aiSchedulingPrompt(input);
    if (!output) {
      return { suggestedSchedule: [], overallNotes: 'A IA não conseguiu gerar uma sugestão. Tente refinar seu pedido.' };
    }
    return output;
  }
);

// Wrapper function to be called from Next.js
export async function scheduleBroadcast(input: AISchedulingAssistantInput): Promise<AISchedulingAssistantOutput> {
  try {
      return await aiSchedulingAssistantFlow(input);
  } catch (error) {
      console.error("Error executing scheduleBroadcast flow:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      return { suggestedSchedule: [], overallNotes: `Ocorreu um erro ao processar a solicitação: ${errorMessage}` };
  }
}
