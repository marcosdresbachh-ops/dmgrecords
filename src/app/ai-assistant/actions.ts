"use server";

import { scheduleBroadcast, AISchedulingAssistantInput, AISchedulingAssistantOutput } from "@/ai/flows/ai-scheduling-assistant";

export async function getScheduleSuggestion(
  prevState: { data: AISchedulingAssistantOutput | null; error: string | null },
  formData: FormData
): Promise<{ data: AISchedulingAssistantOutput | null; error: string | null }> {
  const schedulingRequest = formData.get("schedulingRequest") as string;
  const stationGuidelines = formData.get("stationGuidelines") as string;
  const historicalData = formData.get("historicalData") as string;
  const currentScheduleContext = formData.get("currentScheduleContext") as string | undefined;

  if (!schedulingRequest) {
    return { data: null, error: "Scheduling request is required." };
  }

  const input: AISchedulingAssistantInput = {
    schedulingRequest,
    stationGuidelines,
    historicalData,
    currentScheduleContext,
  };

  try {
    const result = await scheduleBroadcast(input);
    return { data: result, error: null };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: e.message || "An unexpected error occurred." };
  }
}
