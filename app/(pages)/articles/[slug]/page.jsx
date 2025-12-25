// /app/articles/[slug]/page.js
import React from "react";
import { articles } from "@/app/lib/articles";
import Navbar from "@/app/components/global/Navbar";
import Footer from "@/app/components/global/Footer";

export default async function BlogPost({ params }) {
  const { slug } = await params; // ✅ Await params
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-40">
          <p className="text-xl text-center">Article not found</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-40">
        {/* Article Header */}
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-8">{article.date}</p>

        {/* Article Image */}
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover mb-8 rounded-lg"
          />
        )}

        {/* Article Content */}
        {article.content && (
          <div
            className="prose prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 max-w-full"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}
      </main>
      <Footer />
    </>
  );
}