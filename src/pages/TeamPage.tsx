
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { id: 1, name: "John Doe", role: "CEO", email: "john@example.com", avatar: "/placeholder.svg" },
  { id: 2, name: "Jane Smith", role: "CTO", email: "jane@example.com", avatar: "/placeholder.svg" },
  { id: 3, name: "Mike Johnson", role: "Product Manager", email: "mike@example.com", avatar: "/placeholder.svg" },
  { id: 4, name: "Sarah Williams", role: "Lead Designer", email: "sarah@example.com", avatar: "/placeholder.svg" },
  { id: 5, name: "David Brown", role: "Full Stack Developer", email: "david@example.com", avatar: "/placeholder.svg" },
  { id: 6, name: "Lisa Davis", role: "Marketing Specialist", email: "lisa@example.com", avatar: "/placeholder.svg" },
];

const TeamPage = () => {
  return (
    <Dashboard activePage="team">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Team</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Overview of your team and their roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center space-x-4 p-3 rounded-lg border">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Dashboard>
  );
};

export default TeamPage;
