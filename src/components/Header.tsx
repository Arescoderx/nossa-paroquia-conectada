import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Cross } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/comunidades", label: "Comunidades" },
  { to: "/agenda", label: "Agenda" },
  { to: "/horarios", label: "Horários" },
  { to: "/ministerios", label: "Ministérios" },
  { to: "/blog", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <Cross className="h-7 w-7 text-accent" strokeWidth={2.5} />
          <div>
            <span className="font-heading text-lg font-bold text-primary leading-tight block">
              Paróquia São Miguel
            </span>
            <span className="text-xs text-muted-foreground">Arcanjo</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === item.to
                  ? "text-accent font-semibold"
                  : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <div className="flex flex-col px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? "text-accent bg-muted"
                      : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
