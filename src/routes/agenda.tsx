import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { parishEvents, allCommunities, eventTypeLabels } from "@/data/parish";
import SectionTitle from "@/components/SectionTitle";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/agenda")({
  component: AgendaPage,
  head: () => ({
    meta: [
      { title: "Agenda - Paróquia São Miguel Arcanjo" },
      { name: "description", content: "Confira a agenda de eventos da Paróquia São Miguel Arcanjo." },
    ],
  }),
});

function AgendaPage() {
  const [communityFilter, setCommunityFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filtered = parishEvents
    .filter((e) => !communityFilter || e.communityId === communityFilter)
    .filter((e) => !typeFilter || e.type === typeFilter)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="Agenda Paroquial" subtitle="Todos os eventos e celebrações" />

        <div className="mt-8 flex flex-wrap gap-3">
          <select
            value={communityFilter}
            onChange={(e) => setCommunityFilter(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground"
          >
            <option value="">Todas as comunidades</option>
            {allCommunities.slice(0, 3).map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground"
          >
            <option value="">Todos os tipos</option>
            {Object.entries(eventTypeLabels).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>

        <div className="mt-8 space-y-4">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">Nenhum evento encontrado.</p>
          ) : (
            filtered.map((event) => {
              const community = event.communityId
                ? allCommunities.find((c) => c.id === event.communityId)
                : null;
              return (
                <div key={event.id} className="rounded-xl bg-card p-6 shadow-parish">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 font-medium text-accent">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(event.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {event.time}
                    </span>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {eventTypeLabels[event.type]}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-bold text-foreground">{event.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                  {community && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-accent">
                      <MapPin className="h-3 w-3" /> {community.name}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
