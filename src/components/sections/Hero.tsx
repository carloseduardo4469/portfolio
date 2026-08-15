"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const titleLines = siteConfig.hero.title.split("\n");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      {/* elemento flutuante decorativo — o "signature" visual da seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-amber/20 blur-3xl animate-float md:h-96 md:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/4 h-40 w-40 rounded-full border border-teal/40 md:h-56 md:w-56"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <motion.span variants={fadeUp} className="eyebrow mb-6 block">
          {siteConfig.hero.eyebrow}
        </motion.span>

        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          {titleLines.map((line, i) => (
            <motion.span key={i} variants={fadeUp} custom={i} className="block overflow-hidden">
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          custom={titleLines.length + 1}
          className="mt-6 max-w-xl text-lg text-paper/70"
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} custom={titleLines.length + 2} className="mt-10">
          <Button href={siteConfig.hero.ctaHref}>
            {siteConfig.hero.ctaLabel}
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
