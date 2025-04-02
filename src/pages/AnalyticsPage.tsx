
import { Dashboard } from "@/components/dashboard/Dashboard";
import { BarChart, TrendingUp, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { MetricCard } from "@/components/dashboard/MetricCard";

const AnalyticsPage = () => {
  return (
    <Dashboard activePage="analytics">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Analytics</h1>
        
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <MetricCard 
                title="Total Revenue"
                value="$45,231.89"
                description="from last month"
                icon={BarChart}
                trend={{value: 20.1, positive: true}}
              />
              
              <MetricCard 
                title="Conversion Rate"
                value="3.2%"
                description="from last month"
                icon={TrendingUp}
                trend={{value: 4.1, positive: true}}
              />
              
              <MetricCard 
                title="Active Users"
                value="+12,234"
                description="from last month"
                icon={LineChart}
                trend={{value: 10.1, positive: true}}
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Overview of your analytics performance in the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                Performance chart will be displayed here
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sales" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <MetricCard 
                title="Monthly Sales"
                value="$24,568.00"
                description="from last month"
                icon={BarChart}
                trend={{value: 12.3, positive: true}}
              />
              
              <MetricCard 
                title="Average Order Value"
                value="$186.20"
                description="from last month"
                icon={BarChart}
                trend={{value: 2.5, positive: false}}
              />
              
              <MetricCard 
                title="Sales Growth Rate"
                value="8.7%"
                description="from last month"
                icon={TrendingUp}
                trend={{value: 1.2, positive: true}}
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales Report</CardTitle>
                <CardDescription>Detailed breakdown of sales for the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                Sales chart will be displayed here
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <MetricCard 
                title="New Customers"
                value="1,254"
                description="from last month"
                icon={TrendingUp}
                trend={{value: 5.3, positive: true}}
              />
              
              <MetricCard 
                title="Customer Retention"
                value="86.7%"
                description="from last month"
                icon={BarChart}
                trend={{value: 1.8, positive: false}}
              />
              
              <MetricCard 
                title="Churn Rate"
                value="3.2%"
                description="from last month"
                icon={TrendingUp}
                trend={{value: 0.5, positive: false}}
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>Analysis of customer acquisition and retention</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                Customer growth chart will be displayed here
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Dashboard>
  );
};

export default AnalyticsPage;
