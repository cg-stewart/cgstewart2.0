"use client";

import Image from "next/image";
import { SocialLinks } from "./social-links";
import { AnimatedElement } from "@/components/animated-element";

const profileData = {
  image: "/placeholder.svg",
  name: "CG Stewart",
  description: "Software Engineer with expertise in Java, Spring Boot, React, and cloud technologies. Building scalable solutions and writing about tech.",
};

export default function Hero() {
  return (
    <AnimatedElement>
      <section className="flex flex-col items-center space-y-4 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <Image
            src={profileData.image}
            alt="Profile"
            className="object-cover"
            fill
            priority
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {profileData.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {profileData.description}
        </p>
        <SocialLinks />
      </section>
    </AnimatedElement>
  );
}
