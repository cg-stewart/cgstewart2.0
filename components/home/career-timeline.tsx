"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "./resume";
import { AnimatedElement } from "@/components/animated-element";

export default function CareerTimeline() {
  return (
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
  );
}
