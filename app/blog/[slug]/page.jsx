import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { posts } from "@/app/data/knowledgeData";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  console.log(slug);
  

  if (!post) return notFound();

  const Icon = post.mainIcon;

  return (
    <section className="min-h-screen bg-gray-950 text-gray-300 py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-10"
        >
          <FaArrowLeft className="h-4 w-4" />
          Back to Knowledge Hub
        </Link>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-gray-800/70 mb-6">
            <Icon className="h-12 w-12 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {post.title}
            </h1>
          <p className="text-cyan-400 uppercase text-sm font-semibold tracking-widest">
            {post.category}
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none leading-relaxed text-gray-300 whitespace-pre-line">
          {post.content || "No content available for this blog post."}
        </article>
      </div>
    </section>
  );
}
