import React from "react";
import Navbar from "@/app/components/global/Navbar";
import Footer from "@/app/components/global/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

// Custom components for Portable Text
const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl md:text-3xl font-extrabold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base md:text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
};

export default async function BlogPost({ params }) {
  // Await params in Next.js 15
  const { slug } = await params;

  // Fetch the article from Sanity by slug
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    mainImage,
    date,
    content
  }`;

  const article = await client.fetch(query, { slug });

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-32">
          <p className="text-xl text-center">Article not found</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-32 text-black">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          {article.title}
        </h1>
        <p className="text-black/90 mb-8">
          {new Date(article.date).toLocaleDateString()}
        </p>

        {article.mainImage && (
          <img
            src={urlFor(article.mainImage).width(1200).url()}
            alt={article.title}
            className="w-full h-96 object-cover mb-8 rounded-lg"
          />
        )}

        {article.content && (
          <div className="max-w-full text-base md:text-lg">
            <PortableText
              value={article.content}
              components={portableTextComponents}
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}