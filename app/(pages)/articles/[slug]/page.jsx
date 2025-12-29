import React from "react";
import Navbar from "@/app/components/global/Navbar";
import Footer from "@/app/components/global/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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
      <main className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {article.title}
        </h1>
        <p className="text-gray-500 mb-8">
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
          <div className="prose prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 max-w-full">
            {article.content.map((block, i) => (
              <p key={i}>
                {block.children.map((child) => child.text).join("")}
              </p>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}