"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { fadeUp, scrollRevealProps } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contato" className="border-t border-paper/10 px-6 py-24">
      <motion.div
        {...scrollRevealProps}
        variants={fadeUp}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="eyebrow mb-4 block">{siteConfig.contact.eyebrow}</span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          {siteConfig.contact.title}
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a target="_blank"
            href={siteConfig.contact.whatsapp}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Chamar no WhatsApp
            <ArrowUpRight size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
