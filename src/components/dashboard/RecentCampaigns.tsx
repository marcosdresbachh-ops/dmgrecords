import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { recentCampaigns } from "@/lib/data"

export function RecentCampaigns() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Campaigns</CardTitle>
        <CardDescription>
          You made {recentCampaigns.length} successful campaigns this month.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentCampaigns.map((campaign, index) => (
          <div key={index} className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={`https://picsum.photos/seed/client${index}/100/100`} alt="Avatar" />
              <AvatarFallback>{campaign.client.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{campaign.name}</p>
              <p className="text-sm text-muted-foreground">{campaign.client}</p>
            </div>
            <div className="ml-auto font-medium">+${campaign.revenue.toLocaleString()}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
