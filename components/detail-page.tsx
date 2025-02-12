import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout";
import { ArrowLeft } from "lucide-react";

interface DetailPageProps {
  title: string;
  date: string;
  author: string;
  content: React.ReactNode;
  image?: string;
  backLink: string;
}

export function DetailPage({
  title,
  date,
  author,
  content,
  image,
  backLink,
}: DetailPageProps) {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto">
        <Link
          href={backLink}
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center mb-6 text-muted-foreground">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <time>{date}</time>
        </div>
        {image && (
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <div className="prose dark:prose-invert">{content}</div>
      </article>
    </Layout>
  );
}
