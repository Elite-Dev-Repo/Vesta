"use client";
import eliteico from "@/assets/elitelco.jpeg";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MyCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      name: "Marcus Thorne",
      title: "Senior Alpha Trader",
      desc: "Vesta’s real-time analytics have cut my research time by 60%. The ability to track whale movements across multiple chains in one dashboard is something I haven't found elsewhere.",
      img: eliteico,
    },
    {
      name: "Sarah Jenkins",
      title: "Founder, Zenith DAO",
      desc: "Managing our treasury used to be a nightmare of fragmented tools. Vesta provides a unified view that has completely streamlined our governance and asset allocation.",
      img: eliteico,
    },
    {
      name: "Alex Rivera",
      title: "DeFi Strategist",
      desc: "The UI is incredibly slick, but the engine underneath is what matters. The smart contract security scores give me the confidence to explore new pools without the usual anxiety.",
      img: eliteico,
    },
    {
      name: "Li Wei",
      title: "Web3 Developer",
      desc: "I've integrated Vesta's API into our own internal tools. The documentation is top-tier, and the data latency is practically zero. It’s the infrastructure the space was missing.",
      img: eliteico,
    },
    {
      name: "Elena Rodriguez",
      title: "Venture Partner, BlockFound",
      desc: "We recommend Vesta to all our portfolio companies. It’s not just a tool; it’s a standard for how professional-grade crypto asset management should look and feel.",
      img: eliteico,
    },
    {
      name: "David 'Satoshi' Miller",
      title: "Full-time Yield Farmer",
      desc: "The cross-chain swap speed is mental. I was able to bridge and swap into a high-yield position minutes before the pool filled up. Vesta literally paid for itself in one trade.",
      img: eliteico,
    },
  ];

  useEffect(() => {
    // 1. If the carousel API isn't ready yet, do nothing
    if (!api) return;

    // 2. Initial Setup: Wrap in a function or just call once
    const updateStats = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    // Run once when api is first available
    updateStats();

    // 3. Listener: Update state ONLY when the user actually scrolls
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    // 4. Cleanup: This prevents memory leaks and multiple listeners
    // which often causes the "cascading renders" error.
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="mx-auto w-full max-w-2xl px-12 py-10">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-primary/10 bg-primary/5">
                <CardContent className="flex flex-col items-start  gap-6">
                  {/* Fixed Icon Name */}
                  <h4 className="font-light text-primary/50 text-sm text-primary">
                    {item.title}
                  </h4>
                  <p className="text-md font-light leading-relaxed italic text-primary/90">
                    "{item.desc}"
                  </p>
                  <div className="flex  items-center gap-3 mt-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 rounded-lg border-2 border-primary/20 object-cover"
                    />
                    <div>
                      <p className="text-md text-primary">{item.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>

      <div className="text-primary/40 py-4 text-center text-xs tracking-widest uppercase">
        {current} / {count}
      </div>
    </div>
  );
}
