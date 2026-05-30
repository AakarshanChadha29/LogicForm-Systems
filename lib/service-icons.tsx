import {
  BarChart3,
  BookOpen,
  Bot,
  CloudCog,
  Globe,
  Headset,
  Layers3,
  Shield,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIcon } from "@/data/services";

export const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  globe: Globe,
  bot: Bot,
  chart: BarChart3,
  layers: Layers3,
  operations: Headset,
  cloud: CloudCog,
  book: BookOpen,
  shield: Shield,
};
