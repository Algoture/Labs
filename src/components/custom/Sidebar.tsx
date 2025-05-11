import clsx from "clsx";
import {
  Aperture,
  Bolt,
  Brain,
  Fingerprint,
  FlaskConical,
  Key,
  Pyramid,
  Server,
  Snowflake,
  Sprout,
  Trophy,
  Webhook,
  Weight,
} from "lucide-react";
const icons = [
  {
    id: 1,
    icon: Brain,
    tooltip: "Weight",
  },
  {
    id: 2,
    icon: Aperture,
    tooltip: "Aperture",
  },
  {
    id: 3,
    icon: Bolt,
    tooltip: "Bolt",
  },
  {
    id: 4,
    icon: Fingerprint,
    tooltip: "Fingerprint",
  },
  {
    id: 5,
    icon: FlaskConical,
    tooltip: "FlaskConical",
  },
  {
    id: 6,
    icon: Server,
    tooltip: "Server",
  },
  {
    id: 7,
    icon: Key,
    tooltip: "Key",
  },
  {
    id: 8,
    icon: Pyramid,
    tooltip: "Pyramid",
  },
  {
    id: 9,
    icon: Webhook,
    tooltip: "Webhook",
  },
  {
    id: 10,
    icon: Weight,
    tooltip: "Weight",
  },
  {
    id: 11,
    icon: Trophy,
    tooltip: "Trophy",
  },
  {
    id: 12,
    icon: Snowflake,
    tooltip: "Snowflake",
  },
  {
    id: 13,
    icon: Sprout,
    tooltip: "Sprout",
  },
];
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-neutral-400">
      <div className="min-h-screen flex flex-col justify-around w-fit bg-neutral-300 px-1.5 rounded-full ml-1">
        {icons.map((ic) => {
          return (
            <TooltipProvider key={ic.id}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={clsx(
                      "cursor-pointer text-gray-800 p-1.5 rounded-full hover:bg-gray-100",
                      ic.id === 4 ? "bg-green-500 hover:bg-green-500" : ""
                    )}>
                    <ic.icon className="size-5" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" alignOffset={2} arrowPadding={0}>
                  <p>{ic.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
}
