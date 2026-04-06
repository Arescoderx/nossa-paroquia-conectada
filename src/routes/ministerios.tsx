import { createFileRoute } from "@tanstack/react-router";
import { ministries, allCommunities } from "@/data/parish";
import SectionTitle from "@/components/SectionTitle";
import { Users, Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/ministerios")({
  component: MinistriesPage,
  head: () => ({
    meta: [
      { title: "Ministérios e Grupos - Paróquia São Miguel Arcanjo" },
      { name: "description", content: "Conheça os ministérios e grupos pastorais da Paróquia São Miguel Arcanjo." },
    ],
  }),
});

function MinistriesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="Ministérios e Grupos" subtitle="Participe da vida comunitária" />

        <div className="mt-10 space-y-6">
          {ministries.map((m) => {
            const communityNames = m.communityIds
              .map((id) => allCommunities.find((c) => c.id === id)?.name)
              .filter(Boolean);

            return (
              <div key={m.id} className="rounded-xl bg-card p-6 shadow-parish">
                <h3 className="font-heading text-xl font-bold text-foreground">{m.name}</h3>
                <p className="mt-2 text-muted-foreground">{m.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" /> {m.coordinator}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" /> {m.meetingDay}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {communityNames.map((name) => (
                    <span key={name} className="flex items-center gap-1 rounded-full bg-warm px-3 py-1 text-xs font-medium text-warm-foreground">
                      <MapPin className="h-3 w-3" /> {name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
