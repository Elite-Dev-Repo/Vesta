import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ZapIcon,
  ThreeDViewIcon,
  SecurityLockIcon,
  ArtificialIntelligence07Icon,
} from "@hugeicons/core-free-icons";
import choose1 from "../assets/choose1.png";
import choose2 from "../assets/choose2.png";
import choose3 from "../assets/choose3.png";

function Choose() {
  const reasons = [
    {
      img: choose1,
      title: "Secure Transactions",
      desc: "Your trades are protected with our advanced security system.",
    },
    {
      img: choose2,
      title: "24/7 Support",
      desc: "Our responsive support team is available round-the-clock to assist you.",
    },
    {
      img: choose3,
      title: "Seamless Integration",
      desc: "Integrate with your favorite tools and platforms effortlessly.",
    },
  ];

  const miniFeatures = [
    {
      icon: <HugeiconsIcon icon={ZapIcon} size={20} />,
      title: "Lightening Fast Execution",
      desc: "Instantaneous trade execution with minimal latency",
    },
    {
      icon: <HugeiconsIcon icon={ThreeDViewIcon} />,
      title: "Initiative Interface",
      desc: "Intuitive design for seamless navigation and effortless trading.",
    },
    {
      icon: <HugeiconsIcon icon={SecurityLockIcon} />,
      title: "Institutional Grade Security",
      desc: "Enterprise-level security protocols to safeguard your assets.",
    },
    {
      icon: <HugeiconsIcon icon={ArtificialIntelligence07Icon} />,
      title: "Smart adaptive intelligence",
      desc: "AI-powered insights and automation for optimized trading strategies.",
    },
  ];

  return (
    <section className="cont py-24">
      <div className="cont py-20 flex flex-col gap-16 items-center">
        {/* Badge */}
        <p className="text-sm font-light flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
          <HugeiconsIcon icon={ZapIcon} size={20} />
          Why Choose Us
        </p>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <h3 className="text-4xl font-medium">Why traders choose Vesta</h3>
          <p className="text-md text-primary/60 max-w-xl">
            Discover the features that make Vesta the preferred choice for
            traders worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-primary/5 w-fit p-5"
            >
              <img
                src={reason.img}
                alt={reason.title}
                className="hover:scale-105 transition-all duration-300 w-full h-full object-cover p-5 rounded-2xl border border-primary/10 shadow-lg"
              />
              <h4 className="text-xl font-medium">{reason.title}</h4>
              <p className="text-md text-primary/60 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          {miniFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 w-fit">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-background group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-md font-medium">{feature.title}</h4>
              <p className="text-sm text-primary/60 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;
