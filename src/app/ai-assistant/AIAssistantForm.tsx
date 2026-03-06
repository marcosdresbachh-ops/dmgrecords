"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Bot, Loader, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { AISchedulingAssistantOutput } from "@/ai/flows/ai-scheduling-assistant";
import { getScheduleSuggestion } from "./actions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const initialState: {
  data: AISchedulingAssistantOutput | null;
  error: string | null;
} = {
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="destructive">
      {pending ? (
        <Loader className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="mr-2 h-4 w-4" />
      )}
      Generate Schedule
    </Button>
  );
}

export function AIAssistantForm() {
  const [state, formAction] = useFormState(getScheduleSuggestion, initialState);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form action={formAction}>
        <Card>
          <CardHeader>
            <CardTitle>Scheduling Request</CardTitle>
            <CardDescription>Provide the context for the AI to generate a schedule.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="schedulingRequest">Specific Request</Label>
              <Textarea
                id="schedulingRequest"
                name="schedulingRequest"
                placeholder="e.g., 'Suggest optimal programs for the morning block next week'"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stationGuidelines">Station Guidelines</Label>
              <Textarea
                id="stationGuidelines"
                name="stationGuidelines"
                placeholder="e.g., 'Morning shows are from 6am to 10am. Ad breaks are 5 minutes long and occur at :25 and :55 past the hour.'"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="historicalData">Historical Data</Label>
              <Textarea
                id="historicalData"
                name="historicalData"
                placeholder="e.g., 'The 'Morning Rock' show has high engagement. Pop music performs best in the afternoons.'"
                rows={4}
              />
            </div>
             <div className="space-y-2">
              <Label htmlFor="currentScheduleContext">Current Schedule (Optional)</Label>
              <Textarea
                id="currentScheduleContext"
                name="currentScheduleContext"
                placeholder="Provide current schedule if you want to optimize or complete it."
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
      <div className="space-y-6">
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2"><Bot className="h-6 w-6"/> AI Suggestion</CardTitle>
             <CardDescription>The AI will generate an optimal schedule based on your input.</CardDescription>
          </CardHeader>
          <CardContent>
            {state.error && <p className="text-destructive">{state.error}</p>}
            {state.data ? (
              <div className="space-y-4">
                <h3 className="font-semibold">Suggested Schedule</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Time</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Justification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {state.data.suggestedSchedule.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">{item.startTime} - {item.endTime}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{item.justification}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {state.data.overallNotes && (
                    <div>
                        <h3 className="font-semibold mt-4">Overall Notes</h3>
                        <p className="text-sm text-muted-foreground mt-2">{state.data.overallNotes}</p>
                    </div>
                )}
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-12">
                Your generated schedule will appear here.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
