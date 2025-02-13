"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/animated-element";

export default function CurrentProjects() {
  // This will be replaced with React Query data fetching
  const projects = [
    {
      name: "CastleCare",
      description: "On-demand home services platform",
      image: "/placeholder.svg",
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL"],
    },
    {
      name: "QwikCalAI",
      description: "AI-powered calendar automation tool",
      image: "/placeholder.svg",
      techStack: ["Python", "TensorFlow", "React", "AWS Lambda"],
    },
    {
      name: "ParlayPal",
      description: "Real-time sports betting tracker",
      image: "/placeholder.svg",
      techStack: ["Node.js", "Express", "MongoDB", "WebSockets"],
    },
  ];

  return (
    <AnimatedElement delay={0.2}>
      <Card className="order-1 md:order-none overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Currently Working On
          </CardTitle>
          <p className="text-muted-foreground">
            Exciting projects at NEWRGM INDUSTRIES, where innovation meets
            technology
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <AnimatedElement key={project.name} delay={0.3 + index * 0.1}>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="relative h-10 w-10 flex-none">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Visit Site
                      </Button>
                      <Button variant="outline" size="sm">
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
}
