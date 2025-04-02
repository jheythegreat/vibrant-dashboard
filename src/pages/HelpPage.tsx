
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HelpPage = () => {
  return (
    <Dashboard activePage="help">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Help Center</h1>
        
        <Tabs defaultValue="faq">
          <TabsList>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">How do I update my profile?</h3>
                  <p className="text-sm text-muted-foreground">
                    Go to Settings &gt; Profile and edit your information. Don't forget to save your changes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">How can I change my password?</h3>
                  <p className="text-sm text-muted-foreground">
                    Go to Settings &gt; Account and follow the password change instructions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Where can I see my analytics data?</h3>
                  <p className="text-sm text-muted-foreground">
                    All your analytics data is available in the Analytics section of the dashboard.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Our support team is available Monday through Friday, 9am-5pm.
                  </p>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">support@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="guides" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Guides</CardTitle>
                <CardDescription>Step-by-step guides to using the dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Getting Started</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn the basics of navigating the dashboard and accessing key features.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Analytics Guide</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Understand how to read and utilize analytics data for your business.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Team Management</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn how to add, remove, and manage team members effectively.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Dashboard>
  );
};

export default HelpPage;
