"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedElement } from "@/components/animated-element";

export default function ProjectList() {
  // This will be replaced with React Query data fetching
  const projects = [
    {
      id: 1,
      title: "Abstract Harmony",
      imageUrl: "/placeholder.svg",
      date: "Apr 12, 2024",
      description: "A vibrant exploration of color and form.",
    },
    {
      id: 2,
      title: "Urban Reflections",
      imageUrl: "/placeholder.svg",
      date: "Mar 28, 2024",
      description: "Capturing the essence of city life through abstract shapes.",
    },
    {
      id: 3,
      title: "Nature's Whisper",
      imageUrl: "/placeholder.svg",
      date: "Feb 15, 2024",
      description: "An organic blend of natural elements and artistic interpretation.",
    },
  ];

  return (
    <AnimatedElement delay={0.8}>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold tracking-tight sm:text-5xl">
            I like to showcase my projects here
          </CardTitle>
          <p className="mt-2 text-lg text-muted-foreground">
            View my creations and review my code
          </p>
        </CardHeader>
        <CardContent>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedElement key={project.id} delay={0.9 + index * 0.1}>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 space-y-4">
                  <img
                    src={project.imageUrl}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={project.date} className="mr-8">
                      {project.date}
                    </time>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white bg-gray-800 hover:bg-gray-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white bg-gray-800 hover:bg-gray-700"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Github
                    </Button>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
}
