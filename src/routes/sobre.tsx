import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "@/components/SectionTitle";
import { Cross, Heart, Eye, BookOpen } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre - Paróquia São Miguel Arcanjo" },
      { name: "description", content: "Conheça a história, missão e valores da Paróquia São Miguel Arcanjo." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle title="Sobre a Paróquia" subtitle="Nossa história, nossa fé" />

        <div className="mt-12 space-y-8">
          <section className="rounded-xl bg-card p-8 shadow-parish">
            <h3 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
              <BookOpen className="h-6 w-6 text-accent" />
              Nossa História
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A Paróquia São Miguel Arcanjo foi fundada em 1952, quando os primeiros moradores da região se reuniram para construir uma pequena capela dedicada ao Arcanjo São Miguel. Ao longo dos anos, a comunidade cresceu e hoje conta com 13 comunidades espalhadas pela cidade e região rural.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A Igreja Matriz, localizada na Praça da Matriz, foi construída em 1968 e reformada em 2010, preservando sua arquitetura colonial com elementos modernos. É o coração espiritual da paróquia, onde se realizam as principais celebrações e festas litúrgicas.
            </p>
          </section>

          <section className="rounded-xl bg-card p-8 shadow-parish">
            <h3 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
              <Cross className="h-6 w-6 text-accent" />
              Nosso Pároco
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              <strong>Pe. Antônio Carlos de Souza</strong> é o pároco desde 2018. Ordenado em 2005, Pe. Antônio traz consigo uma longa experiência pastoral e um carisma especial para o trabalho com comunidades. Sob sua liderança, a paróquia tem fortalecido a evangelização nas 13 comunidades e ampliado os projetos sociais.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              O vigário paroquial, <strong>Pe. Rafael Mendes</strong>, auxilia nas celebrações e é responsável pela pastoral da juventude e catequese.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 text-center shadow-parish">
              <Heart className="mx-auto h-10 w-10 text-accent" />
              <h4 className="mt-3 font-heading text-lg font-bold text-foreground">Missão</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Evangelizar e acolher todas as pessoas, levando a Palavra de Deus e o amor de Cristo a cada família e comunidade.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 text-center shadow-parish">
              <Eye className="mx-auto h-10 w-10 text-accent" />
              <h4 className="mt-3 font-heading text-lg font-bold text-foreground">Visão</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Ser uma paróquia missionária, com comunidades vivas e atuantes, comprometidas com a transformação social.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 text-center shadow-parish">
              <Cross className="mx-auto h-10 w-10 text-accent" />
              <h4 className="mt-3 font-heading text-lg font-bold text-foreground">Valores</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Fé, acolhimento, serviço, comunhão fraterna, respeito à diversidade e compromisso com os mais necessitados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
