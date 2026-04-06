import { createFileRoute } from "@tanstack/react-router";
import { allCommunities } from "@/data/parish";
import { MapPin, Clock, Phone, Bell, Calendar, Users, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/comunidades/$communityId")({
  component: CommunityDetailPage,
  head: ({ params }) => {
    const community = allCommunities.find((c) => c.id === params.communityId);
    return {
      meta: [
        { title: `${community?.name || "Comunidade"} - Paróquia São Miguel Arcanjo` },
        { name: "description", content: community?.description || "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground">Comunidade não encontrada</h1>
        <Link to="/comunidades" className="mt-4 inline-block text-accent hover:underline">
          Ver todas as comunidades
        </Link>
      </div>
    </div>
  ),
});

function CommunityDetailPage() {
  const { communityId } = Route.useParams();
  const community = allCommunities.find((c) => c.id === communityId);

  if (!community) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Comunidade não encontrada</h1>
          <Link to="/comunidades" className="mt-4 inline-block text-accent hover:underline">
            Ver todas as comunidades
          </Link>
        </div>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/${community.whatsapp}`;

  return (
    <div>
      {/* Hero */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <img src={community.image} alt={community.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8">
            <Link to="/comunidades" className="mb-2 inline-block text-sm text-primary-foreground/70 hover:text-primary-foreground">
              ← Todas as comunidades
            </Link>
            <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              {community.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-xl bg-card p-6 shadow-parish">
              <h2 className="font-heading text-xl font-bold text-foreground">Sobre a Comunidade</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{community.description}</p>
            </section>

            {/* Mass Schedule */}
            <section className="rounded-xl bg-card p-6 shadow-parish">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
                <Clock className="h-5 w-5 text-accent" /> Horários de Missa
              </h2>
              <div className="mt-4 space-y-2">
                {community.massSchedule.map((s, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-muted p-3">
                    <span className="font-medium text-foreground">{s.day}</span>
                    <span className="font-mono text-accent">{s.time}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Events */}
            {community.events.length > 0 && (
              <section className="rounded-xl bg-card p-6 shadow-parish">
                <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
                  <Calendar className="h-5 w-5 text-accent" /> Eventos
                </h2>
                <div className="mt-4 space-y-3">
                  {community.events.map((e) => (
                    <div key={e.id} className="rounded-lg border border-border p-4">
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(e.date).toLocaleDateString("pt-BR")} às {e.time}
                      </div>
                      <h4 className="mt-1 font-heading font-bold text-foreground">{e.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl bg-card p-6 shadow-parish">
              <h3 className="font-heading text-lg font-bold text-foreground">Informações</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {community.address}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {community.phone}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 shrink-0 text-accent" />
                  Coordenação: {community.coordinator}
                </div>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-[#fff] transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp da Comunidade
              </a>
            </div>

            {/* Announcements */}
            {community.announcements.length > 0 && (
              <div className="rounded-xl bg-card p-6 shadow-parish">
                <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
                  <Bell className="h-5 w-5 text-accent" /> Avisos
                </h3>
                <ul className="mt-4 space-y-2">
                  {community.announcements.map((a, i) => (
                    <li key={i} className="rounded-lg bg-warm p-3 text-sm text-warm-foreground">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
