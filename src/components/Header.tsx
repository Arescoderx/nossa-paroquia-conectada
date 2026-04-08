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
        <Link to="/" className="flex items-center">
          <img
            src="https://scontent.fvix24-1.fna.fbcdn.net/v/t39.30808-6/461792440_920673480095092_6520443714597882561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeG4X-ZuXRoBJo1gidlyrlmbXGsSTxwpa5VcaxJPHClrla5YCHUL3lgJ7KsQTZDhBXIlkLTJBQPGhbHQfHvuNElH&_nc_ohc=DXC1eI9pvdsQ7kNvwF6uOgn&_nc_oc=Adrm5TIPwj0D-vsmve4ssWKSwVfGi6w2OOfJ_InlDeWyQPJs8bQKiGy2jp51fMW5pdhJ5OiXyp8W9VoevncgnDdW&_nc_zt=23&_nc_ht=scontent.fvix24-1.fna&_nc_gid=SjFm6rAOPWH7_AwXzAfU_w&_nc_ss=7a3a8&oh=00_Af3J2xaLgx6aB6MtjEE8lxW8En7mwHoTLpz_l0ehzIialw&oe=69D9E11B"
            alt="Logo da Paróquia Santa Maria Goretti"
            className="h-10 w-auto"
          />
          <div>
            <span className="font-heading text-lg font-bold text-primary leading-tight block">
              Paróquia Santa Maria Goretti
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${location.pathname === item.to
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
                  className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${location.pathname === item.to
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
