import { LiveMigration } from "@/components/hero/LiveMigration";
import { ScanScore } from "@/components/service/animations/ScanScore";
import { RescueLoop } from "@/components/service/animations/RescueLoop";
import { SteadyLoop } from "@/components/service/animations/SteadyLoop";
import { GanttFill } from "@/components/service/animations/GanttFill";
import { BidirectionalFlow } from "@/components/service/animations/BidirectionalFlow";
import { TreeBuild } from "@/components/service/animations/TreeBuild";
import { DashboardCount } from "@/components/service/animations/DashboardCount";

export type ServiceAnimationKind =
  | "pipeline"
  | "cleanse"
  | "scan"
  | "rescue"
  | "retainer"
  | "gantt"
  | "integration"
  | "tree"
  | "dashboard";

export function ServiceHeroVisual({ kind }: { kind: ServiceAnimationKind }) {
  switch (kind) {
    case "pipeline":
      return <LiveMigration focus="full" />;
    case "cleanse":
      return <LiveMigration focus="cleanse" />;
    case "scan":
      return <ScanScore />;
    case "rescue":
      return <RescueLoop />;
    case "retainer":
      return <SteadyLoop />;
    case "gantt":
      return <GanttFill />;
    case "integration":
      return <BidirectionalFlow />;
    case "tree":
      return <TreeBuild />;
    case "dashboard":
      return <DashboardCount />;
  }
}
