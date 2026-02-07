import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <section className="w-full border-t border-primary/20">
      <div className="container mx-auto py-10 px-4 text-center flex flex-col items-center gap-8">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-4xl capitalize font-medium text-primary">
            Still have questions?
          </h2>
          <p className="text-primary/60 max-w-lg mx-auto">
            Our team is available 24/7 to help you navigate the platform and
            optimize your trading strategy.
          </p>
        </div>

        <div className="flex sm:flex-row gap-4 items-center">
          <Button size="lg" className="rounded-md px-8 gap-2 text-background">
            <Mail size={18} />
            Contact Support
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-md px-8 gap-2 border-primary/20"
          >
            <MessageCircle size={18} />
            Join Discord
          </Button>
        </div>

        {/* Branding / Copyright Footer Mini */}
        <div className="mt-12 pt-8 border-t border-primary/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary/40 uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://oyenekanemmanuel.xyz/" target="_blank" rel="">
              Elite DEV Protocol
            </a>
            . All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
