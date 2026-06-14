"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

const categories = [
  {
    id: "commercial",
    label: "Commercial",
    sub: "Komersial",
    description:
      "Ruang kerja, perkantoran, dan kawasan bisnis yang mendorong produktivitas dan kolaborasi modern.",
    href: "/architecture/commercial",
    image: "/nusantara_hub.png",
    year: "2022 – 2024",
    count: "12 Projects",
    index: "01",
  },
  {
    id: "residential",
    label: "Residential",
    sub: "Hunian",
    description:
      "Hunian personal yang menyeimbangkan kenyamanan, privasi, dan keindahan arsitektur tropis kontemporer.",
    href: "/architecture/residential",
    image: "/villa_arjuna.png",
    year: "2021 – 2024",
    count: "18 Projects",
    index: "02",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    sub: "Perhotelan",
    description:
      "Desain resor, hotel, dan destinasi wisata yang menciptakan pengalaman berkesan dan berkelanjutan.",
    href: "/architecture/hospitality",
    image: "/kampung_vertikal.png",
    year: "2020 – 2024",
    count: "8 Projects",
    index: "03",
  },
  {
    id: "3dproject",
    label: "3D Project",
    sub: "Visualisasi 3D",
    description:
      "Visualisasi arsitektur fotorealistik berkualitas tinggi untuk presentasi, pemasaran, dan dokumentasi desain.",
    href: "/architecture/3dproject",
    image: "/rumah_prambanan.png",
    year: "2019 – 2024",
    count: "35 Projects",
    index: "04",
  },
];

export default function ArchitecturePage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.add("js-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal") ?? [];
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main
        ref={sectionRef}
        className="pt-32 px-8 md:px-20 lg:px-32 pb-32 bg-white min-h-screen"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-20 reveal">
            <span className="text-[10px] font-light tracking-[0.25em] uppercase text-muted mb-4 block">
              Portfolio
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-text leading-[1.05]">
                Architecture{" "}
                <em className="italic font-light text-dark-muted">Projects</em>
              </h1>
              <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[400px] md:text-right">
                Eksplorasi karya arsitektur kami — dari hunian pribadi hingga
                kawasan komersial dan visualisasi 3D.
              </p>
            </div>
          </div>

          {/* Thin divider */}
          <div className="w-full h-[1px] bg-light-border mb-16 reveal" />

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {categories.map((cat, i) => (
              <a
                key={cat.id}
                href={cat.href}
                className={`group block reveal delay-${i + 1}`}
                style={{ textDecoration: "none" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10] bg-warm-gray mb-5">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] filter grayscale-[10%]"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-text/0 group-hover:bg-text/20 transition-colors duration-500" />

                  {/* Index badge */}
                  <span className="absolute top-5 left-5 font-serif text-6xl font-light text-white/20 leading-none select-none">
                    {cat.index}
                  </span>

                  {/* Hover CTA */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 text-[10px] font-light tracking-[0.18em] uppercase text-white border border-white/60 px-5 py-2.5">
                      Lihat Proyek
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-light tracking-[0.2em] uppercase text-muted">
                    {cat.sub} · {cat.year}
                  </span>
                  <span className="text-[9px] font-light tracking-[0.15em] uppercase text-muted">
                    {cat.count}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-text mb-2 group-hover:text-dark-muted transition-colors duration-300">
                  {cat.label}
                </h2>

                {/* Description */}
                <p className="text-xs font-light text-dark-muted leading-relaxed">
                  {cat.description}
                </p>

                {/* Bottom line */}
                <div className="mt-4 h-[1px] bg-light-border w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </a>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-24 pt-10 border-t border-light-border reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "73+", label: "Total Projects" },
                { num: "8+", label: "Years Experience" },
                { num: "4", label: "Categories" },
                { num: "100%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="font-serif text-4xl font-light text-text mb-1">
                    {s.num}
                  </p>
                  <p className="text-[10px] font-light tracking-[0.15em] uppercase text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
