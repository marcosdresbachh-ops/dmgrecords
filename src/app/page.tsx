import { DollarSign, Wallet, Users, Megaphone } from "lucide-react"
import { StatCard } from "@/components/dashboard/StatCard"
import { RevenueChart } from "@/components/dashboard/RevenueChart"
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          change="+20.1%"
          changeType="increase"
        />
        <StatCard
          title="Total Expenses"
          value="$12,874.32"
          icon={Wallet}
          change="+12.5%"
          changeType="increase"
        />
        <StatCard
          title="Net Profit"
          value="$32,357.57"
          icon={Users}
          change="+22.3%"
          changeType="increase"
        />
        <StatCard
          title="Active Campaigns"
          value="23"
          icon={Megaphone}
          change="+2"
          changeType="increase"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <RevenueChart />
        </div>
        <div className="lg:col-span-3">
          <RecentCampaigns />
        </div>
      </div>
    </div>
  )
}
