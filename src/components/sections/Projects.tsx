"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { fadeUp, staggerContainer, scrollRevealProps } from "@/lib/animations";

// Gera um snapshot (foto) da página inicial do projeto a partir do link,
// usando o serviço WordPress mshots. Ao trocar "url" em site-config.ts,
// a imagem do card é atualizada automaticamente.
function shotUrl(url: string) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1024&h=680`;
}

export function Projects() {
  return (
    <section id="projetos" className="border-t border-paper/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div {...scrollRevealProps} variants={fadeUp} className="mb-14 max-w-xl">
          <span className="eyebrow mb-4 block">{siteConfig.projects.eyebrow}</span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {siteConfig.projects.title}
          </h2>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {siteConfig.projects.items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-paper/10 transition-colors hover:border-amber/40"
            >
              {/* Foto do card gerada a partir do link do projeto */}
              <div className="aspect-video w-full overflow-hidden bg-paper/5">
                <img
                  src={shotUrl(item.url)}
                  alt={`Captura de tela de ${item.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Texto abaixo da imagem */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                  {item.title}
                  <ArrowUpRight size={18} className="text-amber" />
                </h3>
                <p className="mt-3 text-paper/70">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}