
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Sample data
const activities = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
      initials: "AJ",
    },
    action: "created a new project",
    target: "Website Redesign",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Samantha Lee",
      avatar: "/placeholder.svg",
      initials: "SL",
    },
    action: "commented on",
    target: "Q1 Marketing Strategy",
    time: "5 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Daniel Brown",
      avatar: "/placeholder.svg",
      initials: "DB",
    },
    action: "completed task",
    target: "Database Migration",
    time: "Yesterday",
  },
  {
    id: 4,
    user: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg",
      initials: "EW",
    },
    action: "uploaded files to",
    target: "Brand Assets",
    time: "Yesterday",
  },
  {
    id: 5,
    user: {
      name: "Ryan Patel",
      avatar: "/placeholder.svg",
      initials: "RP",
    },
    action: "set up a meeting",
    target: "Project Review",
    time: "2 days ago",
  },
];

interface ActivityItemProps {
  activity: typeof activities[0];
  isLast?: boolean;
}

function ActivityItem({ activity, isLast }: ActivityItemProps) {
  return (
    <div className={cn("flex items-start gap-4 py-3", !isLast && "")}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
        <AvatarFallback>{activity.user.initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm">
          <span className="font-medium">{activity.user.name}</span>{" "}
          <span className="text-muted-foreground">{activity.action}</span>{" "}
          <span className="font-medium">{activity.target}</span>
        </p>
        <p className="text-xs text-muted-foreground">{activity.time}</p>
      </div>
    </div>
  );
}

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-0">
          {activities.map((activity, index) => (
            <div key={activity.id}>
              <ActivityItem 
                activity={activity} 
                isLast={index === activities.length - 1} 
              />
              {index !== activities.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
