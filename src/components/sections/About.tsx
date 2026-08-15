"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { fadeUp, scrollRevealProps } from "@/lib/animations";

export function About() {
  return (
    <section id="sobre" className="border-t border-paper/10 px-6 py-24">
      <motion.div
        {...scrollRevealProps}
        variants={fadeUp}
        className="mx-auto max-w-3xl"
      >
        <span className="eyebrow mb-4 block">{siteConfig.about.eyebrow}</span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          {siteConfig.about.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-paper/70">
          {siteConfig.about.text}
        </p>
      </motion.div>
    </section>
  );
}
