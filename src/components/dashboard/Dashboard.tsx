
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardNavbar } from "./DashboardNavbar";
import { Users, BarChart, ArrowUp, Calendar } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { RevenueChart } from "./RevenueChart";
import { ActivityFeed } from "./ActivityFeed";
import { ReactNode } from "react";

interface DashboardProps {
  children?: ReactNode;
  activePage?: string;
}

export function Dashboard({ children, activePage = "dashboard" }: DashboardProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar activePage={activePage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardNavbar />
          {children ? (
            children
          ) : (
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
                <MetricCard
                  title="Total Revenue"
                  value="$45,231.89"
                  description="vs previous month"
                  icon={BarChart}
                  trend={{ value: 12.5, positive: true }}
                />
                <MetricCard
                  title="New Customers"
                  value="1,298"
                  description="vs previous month"
                  icon={Users}
                  trend={{ value: 8.2, positive: true }}
                />
                <MetricCard
                  title="Active Projects"
                  value="12"
                  description="2 pending approval"
                  icon={Calendar}
                />
                <MetricCard
                  title="Conversion Rate"
                  value="3.6%"
                  description="vs previous month"
                  icon={ArrowUp}
                  trend={{ value: 1.2, positive: false }}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <RevenueChart />
                <ActivityFeed />
              </div>
            </div>
          )}
        </div>
      </div>
    </SidebarProvider>
  );
}
