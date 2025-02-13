"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/animated-element";

export default function VideoList() {
  // This will be replaced with React Query data fetching
  const videos = [
    {
      id: 1,
      title: "Building a React Component Library",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      keywords: ["React", "Component Library", "UI Design"],
    },
    {
      id: 2,
      title: "Optimizing Database Queries",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      keywords: ["Database", "Performance", "SQL"],
    },
    {
      id: 3,
      title: "Deploying with Docker and Kubernetes",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      keywords: ["Docker", "Kubernetes", "DevOps"],
    },
  ];

  return (
    <AnimatedElement delay={1}>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold tracking-tight sm:text-5xl">
            I like to build in public here
          </CardTitle>
          <p className="mt-2 text-lg text-muted-foreground">
            Join me in creating innovative projects and learning together
          </p>
        </CardHeader>
        <CardContent>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {videos.map((video, index) => (
              <AnimatedElement key={video.id} delay={1.1 + index * 0.1}>
                <article className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img
                      src={video.thumbnailUrl}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex flex-wrap gap-2">
                      {video.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={video.videoUrl}>
                          <span className="absolute inset-0" />
                          {video.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/videos">View All Videos</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
}
