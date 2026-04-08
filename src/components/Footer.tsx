import { Link } from "@tanstack/react-router";
import { Cross, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Cross className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg font-bold">Paróquia Santa Maria Goretti</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Unidos na fé, servindo com amor. Nossa paróquia acolhe a todos com o coração aberto.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <Link to="/comunidades" className="hover:text-primary-foreground transition-colors">Comunidades</Link>
              <Link to="/horarios" className="hover:text-primary-foreground transition-colors">Horários de Missa</Link>
              <Link to="/agenda" className="hover:text-primary-foreground transition-colors">Agenda</Link>
              <Link to="/contato" className="hover:text-primary-foreground transition-colors">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Contato
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Praça da Matriz, 01 - Centro</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(11) 3456-7889</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contato@paroquiasantamariagoretti.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Paróquia Santa Maria Goretti. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
