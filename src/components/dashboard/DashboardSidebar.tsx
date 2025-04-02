
import { Home, LayoutDashboard, Settings, Users, BarChart, Calendar, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activePage?: string;
}

const mainMenuItems = [
  { icon: Home, label: "Home", href: "/home", id: "home" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", id: "dashboard" },
  { icon: BarChart, label: "Analytics", href: "/analytics", id: "analytics" },
  { icon: Calendar, label: "Calendar", href: "/calendar", id: "calendar" },
];

const secondaryMenuItems = [
  { icon: Users, label: "Team", href: "/team", id: "team" },
  { icon: Settings, label: "Settings", href: "/settings", id: "settings" },
  { icon: HelpCircle, label: "Help", href: "/help", id: "help" },
];

export function DashboardSidebar({ activePage }: SidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="py-6 px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-semibold text-xl">Dashboard</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild className={cn(item.id === activePage && "bg-sidebar-accent")}>
                    <Link to={item.href} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild className={cn(item.id === activePage && "bg-sidebar-accent")}>
                    <Link to={item.href} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@example.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
