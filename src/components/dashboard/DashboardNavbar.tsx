
import { Bell, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardNavbar() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger>
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
        <div className="md:flex items-center gap-2 rounded-lg border bg-background px-3 py-2 hidden">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-7 text-sm bg-transparent" 
            placeholder="Search..." 
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="User avatar" />
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
