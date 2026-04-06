import { createFileRoute } from "@tanstack/react-router";
import { allCommunities } from "@/data/parish";
import CommunityCard from "@/components/CommunityCard";
import SectionTitle from "@/components/SectionTitle";

export const Route = createFileRoute("/comunidades")({
  component: CommunitiesPage,
  head: () => ({
    meta: [
      { title: "Comunidades - Paróquia São Miguel Arcanjo" },
      { name: "description", content: "Conheça as 13 comunidades da Paróquia São Miguel Arcanjo." },
    ],
  }),
});

function CommunitiesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          title="Nossas Comunidades"
          subtitle="13 comunidades unidas na fé e no serviço"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allCommunities.map((c) => (
            <CommunityCard key={c.id} community={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
