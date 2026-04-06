import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, Bell, ArrowRight, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";
import { communities, parishEvents, blogPosts } from "@/data/parish";
import CommunityCard from "@/components/CommunityCard";
import SectionTitle from "@/components/SectionTitle";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Paróquia São Miguel Arcanjo - Início" },
      { name: "description", content: "Bem-vindo à Paróquia São Miguel Arcanjo. Unidos na fé, servindo com amor em nossas 13 comunidades." },
    ],
  }),
});

function HomePage() {
  const upcomingEvents = parishEvents
    .filter((e) => new Date(e.date) >= new Date("2026-04-01"))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Igreja Matriz São Miguel Arcanjo"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl px-4 text-center"
        >
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-6xl">
            Paróquia São Miguel{" "}
            <span className="text-gradient-gold">Arcanjo</span>
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
            Unidos na fé, servindo com amor. Acolhemos você em nossas 13 comunidades.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/comunidades"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-transform hover:scale-105"
            >
              Nossas Comunidades
            </Link>
            <Link
              to="/horarios"
              className="rounded-lg border border-primary-foreground/30 px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Horários de Missa
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="Próximos Eventos" subtitle="Fique por dentro das atividades da paróquia" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card p-6 shadow-parish"
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-accent">
                  <Calendar className="h-4 w-4" />
                  {new Date(event.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{event.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {event.time}
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{event.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/agenda" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              Ver agenda completa <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Communities Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="Nossas Comunidades" subtitle="Conheça as 13 comunidades da nossa paróquia" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communities.slice(0, 3).map((c) => (
              <CommunityCard key={c.id} community={c} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/comunidades"
              className="inline-flex items-center gap-1 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Ver todas as comunidades <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="Avisos Importantes" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Inscrições para a catequese 2026 abertas em todas as comunidades até 30 de abril.",
              "Encontro de Formação de Líderes no dia 25 de abril às 8h na Matriz.",
              "Campanha do agasalho: pontos de coleta em todas as 13 comunidades.",
              "Missa de Páscoa na Matriz: domingo, 5 de abril, às 10h.",
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-parish">
                <Bell className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="Notícias" subtitle="Acompanhe as novidades da paróquia" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="rounded-xl bg-card p-6 shadow-parish">
                <time className="text-xs font-medium text-accent">
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </time>
                <h3 className="mt-2 font-heading text-lg font-bold text-foreground">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <Link to="/blog" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                  Ler mais <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
