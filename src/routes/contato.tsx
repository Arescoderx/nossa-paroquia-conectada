import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato - Paróquia São Miguel Arcanjo" },
      { name: "description", content: "Entre em contato com a Paróquia São Miguel Arcanjo." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="Contato" subtitle="Fale conosco" />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-xl bg-card p-6 shadow-parish">
              <h3 className="font-heading text-xl font-bold text-foreground">Igreja Matriz</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Praça da Matriz, 01 - Centro
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  (11) 3456-7889
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  contato@paroquiasaomiguel.com.br
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-parish">
              <h3 className="font-heading text-xl font-bold text-foreground">Horário de Atendimento</h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>Segunda a Sexta: 08h às 17h</p>
                <p>Sábado: 08h às 12h</p>
                <p>Domingo: Fechado (apenas celebrações)</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-parish">
              <iframe
                title="Localização da Igreja Matriz"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAwLjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-card p-6 shadow-parish">
            <h3 className="font-heading text-xl font-bold text-foreground">Envie uma Mensagem</h3>

            {submitted ? (
              <div className="mt-6 rounded-lg bg-warm p-6 text-center">
                <p className="font-heading text-lg font-bold text-foreground">Mensagem enviada!</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Agradecemos seu contato. Responderemos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Nome</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">E-mail</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Assunto</label>
                  <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground">
                    <option>Informações gerais</option>
                    <option>Batismo</option>
                    <option>Casamento</option>
                    <option>Catequese</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
                    placeholder="Escreva sua mensagem..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
