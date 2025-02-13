"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/animated-element";

export default function BlogList() {
  // This will be replaced with React Query data fetching
  const posts = [
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
  ];

  return (
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
            {posts.map((post, index) => (
              <AnimatedElement key={post.id} delay={0.7 + index * 0.1}>
                <article className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
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
                        src={post.author.imageUrl}
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
              <Link href="/blog">Read More Posts</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
}
