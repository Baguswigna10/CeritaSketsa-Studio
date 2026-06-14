"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

const services = [
  {
    title: "Architecture",
    image: "/services/architecture.jpg",
    description: "Perancangan bangunan yang fungsional dan kontekstual.",
  },
  {
    title: "Interior Design",
    image: "/services/interior.jpg",
    description: "Desain interior yang nyaman dan berkarakter.",
  },
  {
    title: "Engineering",
    image: "/services/engineering.jpg",
    description: "Perencanaan struktur dan sistem bangunan.",
  },
  {
    title: "Management",
    image: "/services/management.jpg",
    description: "Manajemen proyek dari awal hingga selesai.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen bg-off-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left */}
        <div className="flex items-center px-8 md:px-20 lg:px-32 py-20">
          <div className="w-full max-w-xl">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-10">
              <span className="inline-block w-[20px] h-[1px] bg-muted" />
              Services
            </div>

            <div>
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between py-6 group">
                    <h3
                      className={`font-serif text-3xl md:text-5xl font-light tracking-tight transition-all duration-300 ${active === index
                          ? "text-text"
                          : "text-muted hover:text-dark-muted"
                        }`}
                    >
                      {service.title}
                    </h3>

                    <Plus
                      size={22}
                      strokeWidth={1}
                      className={`text-dark-muted transition-transform duration-300 flex-shrink-0 ${active === index ? "rotate-45" : ""
                        }`}
                    />
                  </div>

                  {/* Expanded description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${active === index
                        ? "max-h-16 opacity-100 mb-2"
                        : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-xs font-light text-dark-muted leading-relaxed tracking-wide pb-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="h-px bg-light-border w-full" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative min-h-[500px] lg:min-h-screen overflow-hidden">
          <Image
            src={services[active].image}
            alt={services[active].title}
            fill
            className="object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-text/10" />

          <div className="absolute bottom-10 left-10 right-10 text-white">
            <div className="border-t border-white/30 pt-6 flex justify-between items-end gap-6">
              <div>
                <p className="text-[10px] font-light uppercase tracking-[0.2em] text-white/70">
                  Service
                </p>
                <h4 className="font-serif text-2xl md:text-3xl font-light mt-2">
                  {services[active].title}
                </h4>
              </div>

              <span className="text-xs font-light text-white/80 leading-relaxed max-w-[200px] text-right">
                {services[active].description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}