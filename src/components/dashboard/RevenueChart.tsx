
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample data
const dailyData = [
  { name: 'Jan 1', revenue: 4000 },
  { name: 'Jan 2', revenue: 3000 },
  { name: 'Jan 3', revenue: 5000 },
  { name: 'Jan 4', revenue: 2780 },
  { name: 'Jan 5', revenue: 1890 },
  { name: 'Jan 6', revenue: 2390 },
  { name: 'Jan 7', revenue: 3490 },
];

const weeklyData = [
  { name: 'Week 1', revenue: 10000 },
  { name: 'Week 2', revenue: 12000 },
  { name: 'Week 3', revenue: 9800 },
  { name: 'Week 4', revenue: 15000 },
];

const monthlyData = [
  { name: 'Jan', revenue: 45000 },
  { name: 'Feb', revenue: 52000 },
  { name: 'Mar', revenue: 49000 },
  { name: 'Apr', revenue: 60000 },
  { name: 'May', revenue: 55000 },
  { name: 'Jun', revenue: 75000 },
];

type TimeRange = "daily" | "weekly" | "monthly";

export function RevenueChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("daily");

  const data = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData
  }[timeRange];

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background/95 border p-2 rounded-lg shadow-sm text-sm">
          <p className="font-medium">{label}</p>
          <p className="text-primary font-medium">${payload[0].value?.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Your revenue performance over time</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={(value) => setTimeRange(value as TimeRange)}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border" />
            <XAxis dataKey="name" className="text-xs" />
            <YAxis 
              className="text-xs"
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: "hsl(var(--primary))", strokeWidth: 1 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
