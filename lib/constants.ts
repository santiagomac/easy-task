import {
  CheckSquare,
  Clock,
  Home,
  Inbox,
  LayoutDashboard,
  LucideIcon,
} from "lucide-react";

interface MainGroupItem {
  icon: LucideIcon;
  name: string;
  url: string;
}

export const mainGroup: MainGroupItem[] = [
  {
    icon: Home,
    name: "Dashboard",
    url: "/",
  },
  {
    icon: LayoutDashboard,
    name: "Board",
    url: "/board",
  },
  {
    icon: CheckSquare,
    name: "My Task",
    url: "/my-task",
  },
  {
    icon: Inbox,
    name: "Inbox",
    url: "/inbox",
  },
  {
    icon: Clock,
    name: "Recent",
    url: "/recent",
  },
];
