import { MoreHorizontal } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { severityColors, statusColors } from "@/lib/colors";

interface AssigmentCardProps {
  title: string;
  dueDate: string;
  severity: string;
  category: string;
  status: string;
}

export const AssigmentCard = ({
  title,
  category,
  severity,
  dueDate,
  status,
}: AssigmentCardProps) => {
  return (
    <div className="flex items-center justify-between border p-3 rounded-md hover:bg-muted/50">
      <div>
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-muted-foreground">
          {category} • {dueDate}
        </span>
      </div>
      <div className="flex items-center flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={cn(severityColors[severity.toLowerCase()])}
          >
            {severity}
          </Badge>
          <Button variant="ghost" className="h-8 w-8" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Status •{" "}
          <span className={cn(statusColors[status.toLowerCase()])}>
            {status}
          </span>
        </p>
      </div>
    </div>
  );
};
