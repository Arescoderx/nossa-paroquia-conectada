import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { allCommunities } from "@/data/parish";
import SectionTitle from "@/components/SectionTitle";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/horarios")({
  component: SchedulePage,
  head: () => ({
    meta: [
      { title: "Horários de Missa - Paróquia São Miguel Arcanjo" },
      { name: "description", content: "Confira os horários de missa em todas as comunidades." },
    ],
  }),
});

function SchedulePage() {
  const [filter, setFilter] = useState("");

  const filtered = filter
    ? allCommunities.filter((c) => c.id === filter)
    : allCommunities;

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="Horários de Missa" subtitle="Encontre a missa mais perto de você" />

        <div className="mt-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground"
          >
            <option value="">Todas as comunidades</option>
            {allCommunities.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="mt-8 space-y-4">
          {filtered.map((c) => (
            <div key={c.id} className="rounded-xl bg-card p-6 shadow-parish">
              <h3 className="font-heading text-lg font-bold text-foreground">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.address}</p>
              <div className="mt-4 space-y-2">
                {c.massSchedule.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="w-32 font-medium text-foreground">{s.day}</span>
                    <span className="font-mono text-accent">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
