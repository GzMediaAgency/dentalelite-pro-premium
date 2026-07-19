"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

/**
 * features/why-us/process-timeline.tsx
 * "Déroulement" — parcours patient en 5 étapes.
 */
export function ProcessTimeline() {
  return (
    <section className="bg-background py-section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
            Déroulement
          </p>
          <h2 className="mt-3 text-display-lg text-primary">Votre parcours, étape par étape</h2>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex flex-col items-start"
              >
                <span className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                  {step.step}
                </span>
                <h3 className="font-display text-base font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
