import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/contexts/AuthContext";
import { usePageLogger } from "@/hooks/use-page-logger";
import { format } from "date-fns";
import type { ActivityLog } from "@shared/schema";
import { ClipboardList, AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function CtwLogin() {
  const { status, auth } = useAuth();
  const [, setLocation] = useLocation();
  usePageLogger('/ctw_login', 'Viewed CTW Login activity logs');

  useEffect(() => {
    if (status === 'authenticated' && auth?.username !== 'gwragg') {
      setLocation('/');
    }
  }, [status, auth, setLocation]);

  const { data: logs, isLoading, error } = useQuery<ActivityLog[]>({
    queryKey: ['/api/activity-logs'],
    enabled: status === 'authenticated' && auth?.username === 'gwragg',
  });

  if (status === 'authenticated' && auth?.username !== 'gwragg') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                  <CardTitle>Access Denied</CardTitle>
                </div>
                <CardDescription>
                  You do not have permission to access this page.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <ClipboardList className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">All Activity Logs</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              View all user login, logout, and page visit activity
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>
                All activity logs showing logins, logouts, and page visits from all users
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8 text-muted-foreground">
                  Loading activity logs...
                </div>
              ) : !logs || logs.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No activity logs found
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[180px]">Timestamp</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Page/Action</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {logs.map((log) => (
                        <TableRow key={log.id} data-testid={`log-row-${log.id}`}>
                          <TableCell className="font-mono text-sm" data-testid={`log-timestamp-${log.id}`}>
                            {format(new Date(log.timestamp), 'MMM dd, yyyy HH:mm:ss')}
                          </TableCell>
                          <TableCell className="font-medium" data-testid={`log-username-${log.id}`}>
                            {log.username}
                          </TableCell>
                          <TableCell data-testid={`log-page-${log.id}`}>
                            {log.page}
                          </TableCell>
                          <TableCell className="text-muted-foreground" data-testid={`log-details-${log.id}`}>
                            {log.details}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
