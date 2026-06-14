"use client";

import React from "react";

const projects = [
  {
    id: 1,
    category: "Hunian",
    location: "Sentul, 2024",
    title: "Villa Arjuna",
    subtitle: "Rumah Tropis Kontemporer di Perbukitan",
    image: "/villa_arjuna.png",
    bg: "bg-[#1a1916]",
    textLight: true,
    index: "01",
  },
  {
    id: 2,
    category: "Komersial",
    location: "Bandung, 2023",
    title: "Nusantara Hub",
    subtitle: "Ruang Komersial Multifungsi Bernuansa Lokal",
    image: "/nusantara_hub.png",
    bg: "bg-[#1a1916]",
    textLight: true,
    index: "02",
  },
  {
    id: 3,
    category: "Publik",
    location: "Jakarta, 2023",
    title: "Galeri Kota",
    subtitle: "Galeri Seni Kontemporer di Tengah Kota",
    image: "/galeri_kota.png",
    bg: "bg-[#1a1916]",
    textLight: true,
    index: "03",
  },
  {
    id: 4,
    category: "Mixed-use",
    location: "Surabaya, 2022",
    title: "Kampung Vertikal",
    subtitle: "Hunian Vertikal Berbasis Komunitas Lokal",
    image: "/kampung_vertikal.png",
    bg: "bg-[#1a1916]",
    textLight: true,
    index: "04",
  },
  {
    id: 5,
    category: "Hunian",
    location: "Yogyakarta, 2022",
    title: "Rumah Prambanan",
    subtitle: "Rumah Tinggal Kontekstual Warisan Budaya",
    image: "/rumah_prambanan.png",
    bg: "bg-[#1a1916]",
    textLight: true,
    index: "05",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Section Header — pinned above the stack */}
      <div className="bg-off-white px-8 md:px-20 lg:px-32 pt-24 pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase text-muted reveal">
              <span className="inline-block w-[20px] h-[1px] bg-muted" />
              Portofolio
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.15] tracking-tight text-text reveal">
              Proyek{" "}
              <em className="italic font-light text-dark-muted">terpilih</em>
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text flex items-center gap-2 transition-colors duration-200 after:content-['→'] reveal"
          >
            Semua Proyek
          </a>
        </div>
      </div>

      {/* Sticky Stack */}
      <div className="relative">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`sticky top-0 h-screen overflow-hidden ${project.bg}`}
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            {/* Dark overlay */}
            <div
              className={`absolute inset-0 ${project.textLight ? "bg-text/60" : "bg-white/40"
                }`}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-20 lg:px-32 py-12">
              {/* Top row: index + category */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-serif text-6xl md:text-8xl font-light leading-none select-none ${project.textLight ? "text-white/20" : "text-text/15"
                    }`}
                >
                  {project.index}
                </span>
                <div
                  className={`flex items-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase ${project.textLight ? "text-white/60" : "text-dark-muted"
                    }`}
                >
                  <span className={`inline-block w-[20px] h-[1px] ${project.textLight ? "bg-white/40" : "bg-muted"}`} />
                  {project.category} · {project.location}
                </div>
              </div>

              {/* Bottom row: title + cta */}
              <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                <div>
                  <h3
                    className={`font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight ${project.textLight ? "text-white" : "text-text"
                      }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-3 text-xs md:text-sm font-light tracking-wide max-w-md leading-relaxed ${project.textLight ? "text-white/70" : "text-dark-muted"
                      }`}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <a
                  href="#"
                  className={`flex-shrink-0 inline-flex items-center gap-3 text-[10px] font-light tracking-[0.15em] uppercase border px-6 py-3 transition-all duration-200 group ${project.textLight
                    ? "border-white/40 text-white hover:bg-white hover:text-text"
                    : "border-text/30 text-text hover:bg-text hover:text-white"
                    }`}
                >
                  Lihat Proyek
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
