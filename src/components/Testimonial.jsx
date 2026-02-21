import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ZapIcon } from "@hugeicons/core-free-icons";
import { MyCarousel } from "./MyCarousel";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="cont py-24" id="testimonials">
      <div className="cont py-20 flex flex-col gap-16 items-center">
        {/* Badge */}
        <p className="text-sm font-light flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
          <HugeiconsIcon icon={ZapIcon} size={20} />
          Testimonials
        </p>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-2"
        >
          <h3 className="text-4xl font-medium">What Our Users Say</h3>
          <p className="text-md text-primary/60 max-w-xl">
            Discover the features that make Vesta the preferred choice for
            traders worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <MyCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
