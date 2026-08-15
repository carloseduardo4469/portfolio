"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site-config";

const drawerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: 0.06 * i, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } }),
};

export function Header() {
  const [open, setOpen] = useState(false);
  const pendingMobileHref = useRef<string | null>(null);

  const scrollToSection = useCallback((href: string) => {
    if (!href || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const updateHash = useCallback((href: string) => {
    window.history.pushState(null, "", href === "#" ? window.location.pathname : href);
  }, []);

  const goToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    updateHash(href);
    scrollToSection(href);
  }, [scrollToSection, updateHash]);

  const goToMobileSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    updateHash(href);
    pendingMobileHref.current = href;
    setOpen(false);
  }, [updateHash]);

  const handleMobileMenuExit = useCallback(() => {
    const href = pendingMobileHref.current;
    pendingMobileHref.current = null;
    if (href) scrollToSection(href);
  }, [scrollToSection]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-paper/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-bold tracking-tight">{siteConfig.name}</a>

        <nav className="hidden gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => goToSection(e, item.href)} className="text-sm text-paper/80 transition-colors hover:text-amber">{item.label}</a>
          ))}
        </nav>

        <motion.button
          onClick={() => setOpen(!open)} whileTap={{ scale: 0.92 }}
          aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu"
          className="relative z-20 flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 bg-paper/5 text-paper transition-colors hover:border-amber/50 hover:text-amber md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={open ? "close" : "open"} initial={{ rotate: -90, opacity: 0, scale: 0.4 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.4 }} transition={{ duration: 0.18 }} className="flex items-center justify-center">
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence initial={false} onExitComplete={handleMobileMenuExit}>
        {open && (
          <motion.nav key="mobile-menu" id="mobile-menu" variants={drawerVariants} initial="hidden" animate="visible" exit="exit" className="overflow-hidden border-t border-paper/10 md:hidden">
            <div className="mx-auto max-w-6xl px-6 py-6">
              <ul className="flex flex-col gap-2">
                {siteConfig.nav.map((item, i) => (
                  <motion.li key={item.href} custom={i} variants={itemVariants} initial="hidden" animate="visible" exit={{ opacity: 0, x: -20, transition: { duration: 0.15 } }}>
                    <a href={item.href} onClick={(e) => goToMobileSection(e, item.href)} className="group flex items-center gap-4 rounded-xl px-4 py-3 font-display text-lg font-bold text-paper/85 transition-colors hover:bg-paper/5 hover:text-amber">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-amber/70 transition-colors group-hover:text-amber">{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div className="mt-6 border-t border-paper/10 pt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.3 }}>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5">Fale no WhatsApp</a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
