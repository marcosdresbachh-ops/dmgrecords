import { AIAssistantForm } from "./AIAssistantForm";

export default function AIAssistantPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI-Powered Scheduling Assistant</h1>
        <p className="text-muted-foreground">
          Analyze historical data and station guidelines to get optimal schedule suggestions.
        </p>
      </div>
      <AIAssistantForm />
    </div>
  )
}
