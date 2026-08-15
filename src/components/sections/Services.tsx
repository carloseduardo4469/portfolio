"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { fadeUp, staggerContainer, scrollRevealProps } from "@/lib/animations";

export function Services() {
  return (
    <section id="servicos" className="border-t border-paper/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div {...scrollRevealProps} variants={fadeUp} className="mb-14 max-w-xl">
          <span className="eyebrow mb-4 block">{siteConfig.services.eyebrow}</span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {siteConfig.services.title}
          </h2>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {siteConfig.services.items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border border-paper/10 p-8 transition-colors hover:border-amber/40"
            >
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-paper/70">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}