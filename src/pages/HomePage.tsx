
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home as HomeIcon, Users, Clock, Briefcase, CheckCircle, Calendar, FileText, Loader, BarChart2, CheckSquare } from "lucide-react";

const HomePage = () => {
  return (
    <Dashboard activePage="home">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Welcome to your Workspace</h1>
        <p className="text-muted-foreground">Your personal dashboard overview</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { 
                    text: "You completed Project Alpha", 
                    time: "2 hours ago", 
                    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                    alt: "Completed"
                  },
                  { 
                    text: "Team meeting scheduled", 
                    time: "Yesterday", 
                    icon: <Calendar className="h-5 w-5 text-blue-500" />,
                    alt: "Scheduled"
                  },
                  { 
                    text: "New task assigned to you", 
                    time: "2 days ago", 
                    icon: <FileText className="h-5 w-5 text-orange-500" />,
                    alt: "New task"
                  },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Your Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { 
                    name: "Website Redesign", 
                    status: "In Progress", 
                    completion: "75%", 
                    icon: <Loader className="h-5 w-5 text-amber-500 animate-spin" />,
                    alt: "In progress"
                  },
                  { 
                    name: "Mobile App", 
                    status: "Planning", 
                    completion: "25%", 
                    icon: <BarChart2 className="h-5 w-5 text-blue-500" />,
                    alt: "Planning"
                  },
                  { 
                    name: "Marketing Campaign", 
                    status: "Complete", 
                    completion: "100%", 
                    icon: <CheckSquare className="h-5 w-5 text-green-500" />,
                    alt: "Complete"
                  },
                ].map((project, i) => (
                  <li key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                        {project.icon}
                      </div>
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-xs text-muted-foreground">{project.status}</div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{project.completion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Alex Johnson", role: "Project Manager", avatar: "AJ" },
                  { name: "Sarah Williams", role: "UI Designer", avatar: "SW" },
                  { name: "Michael Brown", role: "Developer", avatar: "MB" },
                  { name: "Emma Davis", role: "Marketing", avatar: "ED" },
                  { name: "David Wilson", role: "Content Writer", avatar: "DW" },
                  { name: "Jessica Taylor", role: "QA Tester", avatar: "JT" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                      {member.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-xs text-muted-foreground">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
};

export default HomePage;
