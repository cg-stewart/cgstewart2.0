"use client";

import Hero from "@/components/home/hero";
import CurrentProjects from "@/components/home/current-projects";
import CareerTimeline from "@/components/home/career-timeline";
import BlogList from "@/components/home/blog-list";
import ProjectList from "@/components/home/project-list";
import VideoList from "@/components/home/video-list";
import SubscriptionSection from "@/components/home/subscription-section";
import Footer from "@/components/home/footer";
import { BackToTopButton } from "@/components/home/back-to-top-button";
import MobileNav from "@/components/home/mobile-nav";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <Hero />
      <CurrentProjects />
      <CareerTimeline />
      <BlogList />
      <ProjectList />
      <VideoList />
      <SubscriptionSection />
      <Footer />
      <BackToTopButton />
      <MobileNav />
    </div>
  );
}