import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ZapIcon } from "@hugeicons/core-free-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

function Faqs() {
  const faqs = [
    {
      question: "How is Cryptofi different from regular crypto tools?",
      answer:
        "Cryptofi integrates real-time market analytics, portfolio management, and instant cross-chain swaps into a single, unified interface. Unlike fragmented tools, we provide institutional-grade data with a retail-friendly experience.",
    },
    {
      question: "Is my wallet data secure when connected to the platform?",
      answer:
        "Yes. Cryptofi is non-custodial. We never have access to your private keys. We use industry-standard encryption and secure wallet protocols (like WalletConnect) to ensure you remain in full control of your assets.",
    },
    {
      question: "Which blockchains does Cryptofi currently support?",
      answer:
        "We currently support Ethereum, Binance Smart Chain, Polygon, and Arbitrum. Our roadmap includes upcoming integrations for Solana and Base to provide a truly multi-chain trading environment.",
    },
    {
      question: "Do I need to pay a subscription to use the basic features?",
      answer:
        "No. Our 'Starter Plan' offers essential tracking and portfolio management for free. Advanced features like AI trading insights and instant swaps are reserved for our Pro and Elite subscribers.",
    },
    {
      question: "Can I manage multiple wallets from a single dashboard?",
      answer:
        "Absolutely. Pro and Elite users can connect and track an unlimited number of wallets simultaneously, providing a consolidated view of their entire net worth across different chains.",
    },
  ];
  return (
    <section className="cont py-24 flex flex-col items-center" id="faq">
      <div className="cont py-20 flex flex-col gap-16 items-center">
        {/* Badge */}
        <p className="text-sm font-light flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
          <HugeiconsIcon icon={ZapIcon} size={20} />
          FAQs
        </p>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-2"
        >
          <h3 className="text-4xl font-medium">Frequently Asked Questions</h3>
          <p className="text-md text-primary/60 max-w-xl">
            Find answers to common questions about Vesta and its features.
          </p>
        </motion.div>
      </div>

      <div className="">
        <Accordion
          type="single"
          collapsible
          className=" max-w-screen w-[700px] mx-auto  space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-primary/10 bg-primary/5 px-9 rounded-lg py-4"
              >
                <AccordionTrigger className="text-primary hover:no-underline font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary/60 leading-relaxed  py-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faqs;
