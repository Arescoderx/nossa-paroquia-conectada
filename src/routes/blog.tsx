import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { blogPosts, allCommunities } from "@/data/parish";
import SectionTitle from "@/components/SectionTitle";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Notícias - Paróquia São Miguel Arcanjo" },
      { name: "description", content: "Acompanhe as notícias e publicações da Paróquia São Miguel Arcanjo." },
    ],
  }),
});

function BlogPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle title="Notícias" subtitle="Acompanhe as novidades da paróquia" />

        <div className="mt-10 space-y-6">
          {blogPosts.map((post) => {
            const community = post.communityId
              ? allCommunities.find((c) => c.id === post.communityId)
              : null;

            return (
              <article key={post.id} className="rounded-xl bg-card p-6 shadow-parish">
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
                <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">{post.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <Link
                  to="/blog/$postId"
                  params={{ postId: post.id }}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Ler mais →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
