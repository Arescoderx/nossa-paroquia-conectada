import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts, allCommunities } from "@/data/parish";
import { MapPin, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$postId")({
  component: BlogPostPage,
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.id === params.postId);
    return {
      meta: [
        { title: `${post?.title || "Notícia"} - Paróquia São Miguel Arcanjo` },
        { name: "description", content: post?.excerpt || "" },
      ],
    };
  },
});

function BlogPostPage() {
  const { postId } = Route.useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Notícia não encontrada</h1>
          <Link to="/blog" className="mt-4 inline-block text-accent hover:underline">
            Voltar às notícias
          </Link>
        </div>
      </div>
    );
  }

  const community = post.communityId
    ? allCommunities.find((c) => c.id === post.communityId)
    : null;

  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Voltar às notícias
        </Link>

        <article>
          <div className="flex items-center gap-3 text-sm">
            <time className="font-medium text-accent">
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </time>
            {community && (
              <span className="flex items-center gap-1 rounded-full bg-warm px-2.5 py-0.5 text-xs text-warm-foreground">
                <MapPin className="h-3 w-3" /> {community.name}
              </span>
            )}
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-8 leading-relaxed text-muted-foreground text-lg">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
}
