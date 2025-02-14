"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { subscribe } from "@/app/actions/subscription";
import { useToast } from "@/hooks/use-toast";
import { AnimatedElement } from "@/components/animated-element";

export default function SubscriptionSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    videos: true,
    articles: true,
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await subscribe({
        email,
        preferences,
      });

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        setEmail("");
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedElement delay={1.2}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Stay Updated</CardTitle>
          <p className="text-muted-foreground">
            Subscribe to receive updates about new content
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Preferences</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="videos"
                    checked={preferences.videos}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({
                        ...prev,
                        videos: checked === true,
                      }))
                    }
                  />
                  <Label htmlFor="videos">Notify me about new videos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="articles"
                    checked={preferences.articles}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({
                        ...prev,
                        articles: checked === true,
                      }))
                    }
                  />
                  <Label htmlFor="articles">Notify me about new articles</Label>
                </div>
              </div>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
}
