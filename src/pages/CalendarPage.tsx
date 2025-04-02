
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <Dashboard activePage="calendar">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Calendar</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Events for {date?.toLocaleDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 text-muted-foreground">
                  No events scheduled for this day
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default CalendarPage;
