import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ZapIcon,
  CheckmarkCircle02Icon,
  Timer02Icon,
  ShieldKeyIcon,
  AlertDiamondIcon,
  Exchange03Icon,
  PicasaIcon,
  TwitchIcon,
  FramerIcon,
  DropboxIcon,
  CellsIcon,
  Notion02Icon,
  WebflowIcon,
  GitlabIcon,
  StripeIcon,
  PiCircleIcon,
  ShadcnIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import key1 from "../assets/key (1).png";

const Feature = () => {
  const featureData = [
    {
      title: "Real-time Analysis",
      description:
        "Leverage AI-powered analytics to monitor market trends instantly.",
      icon: <HugeiconsIcon icon={Timer02Icon} />,
    },
    {
      title: "Secure Wallet",
      description:
        "Advanced security features including multi-factor authentication.",
      icon: <HugeiconsIcon icon={ShieldKeyIcon} />,
    },
    {
      title: "Smart Alerts",
      description:
        "Receive notifications for price changes and important events.",
      icon: <HugeiconsIcon icon={AlertDiamondIcon} />,
    },

    {
      title: "Instant Swaps",
      description:
        "Execute trades instantly with our high-speed exchange engine.",
      icon: <HugeiconsIcon icon={Exchange03Icon} />,
    },
  ];

  const enterprises = [
    {
      icon: <HugeiconsIcon icon={PicasaIcon} />,
      name: "Pisca",
    },
    {
      icon: <HugeiconsIcon icon={TwitchIcon} />,
      name: "Twitch",
    },
    {
      icon: <HugeiconsIcon icon={FramerIcon} />,
      name: "Framer",
    },
    {
      icon: <HugeiconsIcon icon={DropboxIcon} />,
      name: "Dropbox",
    },
    {
      icon: <HugeiconsIcon icon={CellsIcon} />,
      name: "Enigma",
    },
    {
      icon: <HugeiconsIcon icon={Notion02Icon} />,
      name: "Notion",
    },
    {
      icon: <HugeiconsIcon icon={WebflowIcon} />,
      name: "Webflow",
    },
    {
      icon: <HugeiconsIcon icon={GitlabIcon} />,
      name: "Gitlab",
    },
    {
      icon: <HugeiconsIcon icon={StripeIcon} />,
      name: "Stripe",
    },
    {
      icon: <HugeiconsIcon icon={PiCircleIcon} />,
      name: "Pxxl Space",
    },
    {
      icon: <HugeiconsIcon icon={PicasaIcon} />,
      name: "Pisca",
    },
    {
      icon: <HugeiconsIcon icon={ShadcnIcon} />,
      name: "Shadcn",
    },
  ];

  return (
    <section className="cont py-24" id="features">
      <div className="cont py-20 flex flex-col gap-16 items-center">
        {/* Badge */}
        <p className="text-sm font-light flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
          <HugeiconsIcon icon={ZapIcon} size={20} />
          Key Features
        </p>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-2"
        >
          <h3 className="text-4xl font-medium">Built for the Future</h3>
          <p className="text-md text-primary/60 max-w-xl">
            Explore the powerful features that make Vesta stand out from the
            rest.
          </p>
        </motion.div>
      </div>
      {/* Main Flex Wrapper - Equal Widths */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT SIDE: Image */}
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="col-span-2">
            <img
              src={key1}
              className="w-full h-full object-cover rounded-2xl border border-primary/10 shadow-lg"
              alt="Feature Primary"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: Content + 2x2 Grid */}
        <div className="flex-1 flex flex-col gap-10">
          {/* 2x2 Grid of features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {featureData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index}
                className="flex flex-col gap-4 group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">{item.title}</h4>
                  <p className="text-md text-primary/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-20 items-center">
        <h3 className="text-md text-primary/60">
          Powering experiences from next-gen startups to global enterprises.
        </h3>

        <div className="grid md:grid-cols-6 grid-cols-3 gap-x-5 gap-y-8">
          {enterprises.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                {item.icon}
              </div>
              <p className="tracking-wide font-medium text-primary/70">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
