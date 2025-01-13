import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  Home,
  Layers3,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
} from "lucide-react";

export const sidebarLinks = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Briefcase,
    label: "Timeline",
    href: "/timeline",
  },
  {
    icon: Search,
    label: "Search",
    href: "/search",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: User,
    label: "Users",
    href: "/users",
  },
  {
    icon: Users,
    label: "Teams",
    href: "/teams",
  },
] as const;

export const showPriorityLinks = [
  {
    icon: AlertCircle,
    label: "Urgent",
    href: "/priority/urgent",
  },
  {
    icon: ShieldAlert,
    label: "High",
    href: "/priority/high",
  },
  {
    icon: AlertTriangle,
    label: "Medium",
    href: "/priority/medium",
  },
  {
    icon: AlertOctagon,
    label: "Low",
    href: "/priority/low",
  },
  {
    icon: Layers3,
    label: "Backlog",
    href: "/priority/backlog",
  },
];
