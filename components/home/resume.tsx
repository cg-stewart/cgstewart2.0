import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, ArrowDownIcon } from "lucide-react";
import { AnimatedElement } from "@/components/animated-element";

interface Role {
  company: string;
  title: string;
  logo: string;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  const startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <AnimatedElement>
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={role.logo || "/placeholder.svg"}
            alt=""
            className="h-7 w-7"
            width={28}
            height={28}
            unoptimized
          />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate.toString()}>{startLabel}</time>{" "}
            <span aria-hidden="true">—</span>{" "}
            <time dateTime={endDate.toString()}>{endLabel}</time>
          </dd>
        </dl>
      </li>
    </AnimatedElement>
  );
}

export function Resume() {
  const resume: Array<Role> = [
    {
      company: "NEWRGM INDUSTRIES",
      title: "Founder & CEO",
      logo: "/logos/newrgm.svg",
      start: "2023",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "ATA International",
      title: "Web Developer and Administrator",
      logo: "/logos/ata.svg",
      start: "2020",
      end: "2021",
    },
    {
      company: "Arkansas Democrat-Gazette",
      title: "Digital Tech Support Specialist",
      logo: "/logos/adg.svg",
      start: "2018",
      end: "2020",
    },
    {
      company: "Design Group Marketing",
      title: "Frontend Developer",
      logo: "/logos/dgm.svg",
      start: "2019",
      end: "2019",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <AnimatedElement delay={0.5}>
        <Button variant="outline" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </AnimatedElement>
    </div>
  );
}
