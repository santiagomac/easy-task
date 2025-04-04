import { AssigmentCard } from "@/components/AssigmentCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  ListTodo,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* CARDS TO SHOW RESUME */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row pb-2 items-center justify-between">
            <CardTitle>Total Tasks</CardTitle>
            <ListTodo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold">128</h3>
            <span className="text-xs text-muted-foreground">
              +14 from last week
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row pb-2 items-center justify-between">
            <CardTitle>Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold">64</h3>
            <div className="flex items-center">
              <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-xs text-emerald-500">
                +14 from last week
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row pb-2 items-center justify-between">
            <CardTitle>In Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold">32</h3>
            <div className="flex items-center">
              <ArrowDown className="mr-1 h-3 w-3 text-rose-500" />
              <span className="text-xs text-rose-500">-2% from last week</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row pb-2 items-center justify-between">
            <CardTitle>Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold">12</h3>
            <div className="flex items-center">
              <ArrowDown className="mr-1 h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                -2% from last week
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CARD TO SHOW ACTIVITY */}
      <Card className="mt-6 max-h-screen h-[calc(100vh/1.5)] overflow-hidden">
        <CardHeader className="flex pb-2 justify-between items-center">
          <CardTitle>My Assignments</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <AssigmentCard
              title="Deploy backend"
              category="Website"
              severity="High"
              dueDate="Due in 5 days"
              status="In Progress"
            />
            <AssigmentCard
              title="Develop the sales screen"
              category="Website"
              severity="Medium"
              dueDate="Due in 2 days"
              status="Completed"
            />
            <AssigmentCard
              title="Design Architecture"
              category="Backend"
              severity="High"
              dueDate="Due in 2 days"
              status="Blocked"
            />
            <AssigmentCard
              title="Design Architecture"
              category="Backend"
              severity="High"
              dueDate="Due in 2 days"
              status="Blocked"
            />
            <AssigmentCard
              title="Design Architecture"
              category="Backend"
              severity="High"
              dueDate="Due in 2 days"
              status="Blocked"
            />
            <Button variant="outline" className="flex ml-auto">
              <ArrowRight className="h-4 w-4" />
              <span>View All Assignments</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
