"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [subscribeToVideos, setSubscribeToVideos] = useState(false);
  const [subscribeToArticles, setSubscribeToArticles] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Subscription data:", {
      email,
      subscribeToVideos,
      subscribeToArticles,
    });
    // Reset form
    setEmail("");
    setSubscribeToVideos(false);
    setSubscribeToArticles(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          I can keep you updated on new posts here
        </CardTitle>
        <p className="text-muted-foreground">
          Receive email alerts whenever I publish new content
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="videos"
                checked={subscribeToVideos}
                onCheckedChange={(checked) =>
                  setSubscribeToVideos(checked as boolean)
                }
              />
              <Label htmlFor="videos">Subscribe to videos</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="articles"
                checked={subscribeToArticles}
                onCheckedChange={(checked) =>
                  setSubscribeToArticles(checked as boolean)
                }
              />
              <Label htmlFor="articles">Subscribe to articles</Label>
            </div>
          </div>
          <Button type="submit">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  );
}
