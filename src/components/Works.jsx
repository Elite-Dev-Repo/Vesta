import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ZapIcon } from "@hugeicons/core-free-icons";

import work1 from "../assets/works1.png";
import work2 from "../assets/works2.png";
import work3 from "../assets/works3.png";
import { motion } from "framer-motion";

function Works() {
  const steps = [
    {
      img: work1,
      title: "Create Account",
      desc: "Sign up for a free account and get started in minutes.",
    },
    {
      img: work2,
      title: "Add your Wallet",
      desc: "Deposit funds into your account and start trading.",
    },
    {
      img: work3,
      title: "Start Trading",
      desc: "Start trading with Vesta and enjoy seamless trading experience.",
    },
  ];

  return (
    <section className="cont py-24" id="howitworks">
      <div className="cont py-20 flex flex-col gap-16 items-center">
        {/* Badge */}
        <p className="text-sm font-light flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
          <HugeiconsIcon icon={ZapIcon} size={20} />
          How It Works
        </p>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-2"
        >
          <h3 className="text-4xl font-medium">Get Started in 3 Steps</h3>
          <p className="text-md text-primary/60 max-w-xl">
            Follow these simple steps to start trading with Vesta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-primary/5 w-fit p-5"
            >
              <img
                src={step.img}
                alt={step.title}
                className="hover:scale-105 transition-all duration-300 w-full h-full object-cover p-5 rounded-2xl border border-primary/10 shadow-lg"
              />
              <h4 className="text-xl font-medium">
                0{index + 1}. {step.title}
              </h4>
              <p className="text-md text-primary/60 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
