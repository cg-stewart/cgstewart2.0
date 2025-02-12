import { Button } from "@/components/ui/button";
import { Github, X, Linkedin } from "lucide-react";
import { AnimatedElement } from "@/components/animated-element";

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <AnimatedElement delay={0.1}>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/cg-stewart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://x.com/c_g_stewart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">X</span>
          </a>
        </Button>
      </AnimatedElement>
      <AnimatedElement delay={0.3}>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://linkedin.com/in/camgstewart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
      </AnimatedElement>
    </div>
  );
}
