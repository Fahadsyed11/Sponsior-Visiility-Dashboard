"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/event",
    description: "Perfect for local events and meetups.",
    features: [
      "Up to 10 Sponsors",
      "Basic Analytics",
      "Email Support",
      "Standard PDF Reports",
    ],
  },
  {
    name: "Pro",
    price: "$299",
    period: "/event",
    description: "For professional conferences and summits.",
    popular: true,
    features: [
      "Up to 50 Sponsors",
      "Real-time Dashboard",
      "Custom Branding",
      "Priority Support",
      "AI Insights",
      "Lead Tracking",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large scale exhibitions and multi-day events.",
    features: [
      "Unlimited Sponsors",
      "White-label Solution",
      "API Access",
      "Dedicated Account Manager",
      "Custom Integrations",
      "On-site Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your next event. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative glass rounded-2xl p-8 border ${
                plan.popular ? "border-primary-500 neon-border" : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-premium text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-neutral-400 text-sm h-10">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-neutral-500">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`rounded-full p-1 ${plan.popular ? "bg-primary-500/20 text-primary-400" : "bg-white/5 text-white"}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-gradient-premium text-white hover:opacity-90"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
