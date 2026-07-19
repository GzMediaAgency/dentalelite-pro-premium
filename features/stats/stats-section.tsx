"use client";

import { motion } from "framer-motion";
import { statsItems } from "@/data/stats";
import { AnimatedCounter } from "@/components/shared/animated-counter";

/**
 * features/stats/stats-section.tsx
 * "Chiffres animés" — bandeau de statistiques clés.
 */
export function StatsSection() {
  return (
    <section className="bg-primary bg-mesh bg-grain py-section-y">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {statsItems.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-primary-foreground"
          >
            <p className="text-display-lg font-semibold">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-primary-foreground/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
