import { redirect } from "next/navigation";

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected project examples and delivery patterns from LogicForm Systems across websites, dashboards, automation, and business systems.",
  path: "/work",
});

export default function WorkPage() {
  redirect("/#selected-work");
}
