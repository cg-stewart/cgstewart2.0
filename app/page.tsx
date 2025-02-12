"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialLinks } from "@/components/home/social-links";
import { Resume } from "@/components/home/resume";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/home/mobile-nav";
import { BackToTopButton } from "@/components/home/back-to-top-button";
import { SubscriptionForm } from "@/components/home/subscription-form";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedElement } from "@/components/animated-element";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <AnimatedElement>
        <section className="flex flex-col items-center space-y-4 text-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              className="object-cover"
              fill
              priority
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            CG Stewart
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Software Engineer with expertise in Java, Spring Boot, React, and
            cloud technologies. Building scalable solutions and writing about
            tech.
          </p>
          <SocialLinks />
        </section>
      </AnimatedElement>

      <div className="grid gap-8 md:grid-cols-2">
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
                {[
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
                ].map((project, index) => (
                  <AnimatedElement key={index} delay={0.3 + index * 0.1}>
                    <div className="flex flex-col gap-6 sm:flex-row">
                      <div className="relative h-10 w-10 flex-none">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          {project.name}
                        </h3>
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

        <AnimatedElement delay={0.4}>
          <Card>
            <CardHeader>
              <CardTitle>My Career as of Today</CardTitle>
              <p className="text-muted-foreground">
                An overview of my journey down the yellow brick road
              </p>
            </CardHeader>
            <CardContent>
              <Resume />
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>

      <AnimatedElement delay={0.6}>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-4xl font-semibold tracking-tight sm:text-5xl">
              I write about tech and books here
            </CardTitle>
            <p className="mt-2 text-lg text-muted-foreground">
              My thoughts on the latest news and literature
            </p>
          </CardHeader>
          <CardContent>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  id: 1,
                  title: "The Future of AI in Software Development",
                  href: "#",
                  description:
                    "Exploring how artificial intelligence is reshaping the landscape of coding and software design.",
                  date: "Mar 16, 2024",
                  datetime: "2024-03-16",
                  category: { title: "Technology", href: "#" },
                  author: {
                    name: "CG Stewart",
                    role: "Software Engineer",
                    href: "#",
                    imageUrl: "/placeholder.svg",
                  },
                  imageUrl: "/placeholder.svg",
                },
                {
                  id: 2,
                  title: "Building Scalable Microservices with Spring Boot",
                  href: "#",
                  description:
                    "A deep dive into creating robust, scalable microservices architectures using Spring Boot.",
                  date: "Mar 10, 2024",
                  datetime: "2024-03-10",
                  category: { title: "Backend", href: "#" },
                  author: {
                    name: "CG Stewart",
                    role: "Software Engineer",
                    href: "#",
                    imageUrl: "/placeholder.svg",
                  },
                  imageUrl: "/placeholder.svg",
                },
                {
                  id: 3,
                  title: "React Performance Optimization Techniques",
                  href: "#",
                  description:
                    "Practical tips and tricks to boost the performance of your React applications.",
                  date: "Mar 5, 2024",
                  datetime: "2024-03-05",
                  category: { title: "Frontend", href: "#" },
                  author: {
                    name: "CG Stewart",
                    role: "Software Engineer",
                    href: "#",
                    imageUrl: "/placeholder.svg",
                  },
                  imageUrl: "/placeholder.svg",
                },
              ].map((post, index) => (
                <AnimatedElement key={post.id} delay={0.7 + index * 0.1}>
                  <article className="flex flex-col items-start justify-between">
                    <div className="relative w-full">
                      <img
                        src={post.imageUrl || "/placeholder.svg"}
                        alt=""
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={post.datetime}
                          className="text-gray-500"
                        >
                          {post.date}
                        </time>
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.description}
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                          src={post.author.imageUrl || "/placeholder.svg"}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-100"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedElement>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild>
                <a href="/blog">Read More Posts</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedElement>

      <AnimatedElement delay={0.8}>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-4xl font-semibold tracking-tight sm:text-5xl">
              I like to showcase my art here
            </CardTitle>
            <p className="mt-2 text-lg text-muted-foreground">
              View my creations and review my code
            </p>
          </CardHeader>
          <CardContent>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
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
                  description:
                    "Capturing the essence of city life through abstract shapes.",
                },
                {
                  id: 3,
                  title: "Nature's Whisper",
                  imageUrl: "/placeholder.svg",
                  date: "Feb 15, 2024",
                  description:
                    "An organic blend of natural elements and artistic interpretation.",
                },
              ].map((project, index) => (
                <AnimatedElement key={project.id} delay={0.9 + index * 0.1}>
                  <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 space-y-4">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
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
                <a href="/projects">View All Projects</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedElement>

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
              {[
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
              ].map((video, index) => (
                <AnimatedElement key={video.id} delay={1.1 + index * 0.1}>
                  <article className="flex flex-col items-start justify-between">
                    <div className="relative w-full">
                      <img
                        src={video.thumbnailUrl || "/placeholder.svg"}
                        alt=""
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex flex-wrap gap-x-2 text-xs">
                        {video.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
                <a href="/videos">View All Videos</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedElement>

      <AnimatedElement delay={1.2}>
        <SubscriptionForm />
      </AnimatedElement>

      <footer className="mt-32 border-t border-gray-200 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2024 CG Stewart. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <BackToTopButton />
    </div>
  );
}
