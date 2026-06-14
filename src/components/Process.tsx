"use client";

import React, { useState } from "react";

interface ProcessStepData {
  num: string;
  title: string;
  desc: string;
}

const stepsData: ProcessStepData[] = [
  {
    num: "01",
    title: "Dengar & Pahami",
    desc: "Sesi konsultasi mendalam untuk memahami visi, kebutuhan, gaya hidup, dan anggaran Anda. Dasar dari setiap keputusan desain kami.",
  },
  {
    num: "02",
    title: "Analisis & Konsep",
    desc: "Analisis tapak, regulasi, dan kondisi lingkungan. Pengembangan konsep desain dengan beberapa alternatif skematik.",
  },
  {
    num: "03",
    title: "Pengembangan Desain",
    desc: "Penyempurnaan desain terpilih. Koordinasi struktur, MEP, dan detail arsitektur. Visualisasi 3D yang komprehensif.",
  },
  {
    num: "04",
    title: "Dokumen Konstruksi",
    desc: "Penyusunan gambar kerja lengkap, spesifikasi teknis, dan dokumen tender untuk proses konstruksi yang lancar.",
  },
  {
    num: "05",
    title: "Pengawasan & Serah Terima",
    desc: "Pendampingan konstruksi, inspeksi berkala, dan serah terima akhir. Kami memastikan kualitas yang tak berkompromi.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const getStrokeProps = (nodeIndex: number) => {
    const isHighlighted = hoveredStep === nodeIndex;
    return {
      stroke: isHighlighted ? "#1a1916" : "#7a746c",
      strokeWidth: isHighlighted ? 1.5 : 0.6,
    };
  };

  return (
    <section id="process" className="px-8 py-24 md:px-20 lg:px-32">
      <div className="section-eyebrow reveal mb-2 flex items-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase text-muted before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-muted">
        Metodologi
      </div>
      <h2 className="section-title reveal font-serif text-3xl md:text-5xl font-light leading-[1.15] tracking-tight text-text">
        Proses kami yang <br />
        <em className="italic font-light text-dark-muted">terstruktur dan teruji</em>
      </h2>

      <div className="process-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-16">
        {/* Left Side: Steps */}
        <div className="process-steps">
          {stepsData.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setActiveStep(index);
                setHoveredStep(index);
              }}
              onMouseLeave={() => {
                setHoveredStep(null);
              }}
              className={`process-step flex gap-8 py-8 border-b border-light-border first:border-t transition-opacity duration-300 cursor-default ${
                activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-100"
              }`}
            >
              <span className="text-[11px] font-light tracking-wider text-muted min-w-[28px] pt-1">
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-xl font-normal text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-light text-dark-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Graph SVG */}
        <div className="process-visual bg-warm-gray h-[360px] md:h-[480px] flex items-center justify-center relative overflow-hidden reveal">
          <svg
            className="process-diagram w-[80%] h-[80%]"
            viewBox="0 0 380 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center node */}
            <circle cx="190" cy="210" r="40" stroke="#1a1916" strokeWidth="0.8" fill="none" />
            <text
              x="190"
              y="206"
              textAnchor="middle"
              fontFamily="var(--font-cormorant), serif"
              fontSize="13"
              fontWeight="300"
              fill="#1a1916"
            >
              FORMA
            </text>
            <text
              x="190"
              y="220"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#b0aba2"
              letterSpacing="2"
            >
              STUDIO
            </text>

            {/* Spoke lines */}
            <line x1="190" y1="170" x2="190" y2="90" stroke="#e8e5e0" strokeWidth="0.8" />
            <line x1="224" y1="186" x2="295" y2="145" stroke="#e8e5e0" strokeWidth="0.8" />
            <line x1="224" y1="234" x2="295" y2="275" stroke="#e8e5e0" strokeWidth="0.8" />
            <line x1="190" y1="250" x2="190" y2="330" stroke="#e8e5e0" strokeWidth="0.8" />
            <line x1="156" y1="186" x2="85" y2="145" stroke="#e8e5e0" strokeWidth="0.8" />

            {/* Orbit ring */}
            <circle
              cx="190"
              cy="210"
              r="120"
              stroke="#f2f0ec"
              strokeWidth="0.6"
              strokeDasharray="4,6"
              fill="none"
            />

            {/* Node 0 */}
            <circle
              cx="190"
              cy="70"
              r="22"
              fill="white"
              className="transition-all duration-300"
              {...getStrokeProps(0)}
            />
            <text
              x="190"
              y="66"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              Dengar
            </text>
            <text
              x="190"
              y="77"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              &amp; Pahami
            </text>

            {/* Node 1 */}
            <circle
              cx="310"
              cy="135"
              r="22"
              fill="white"
              className="transition-all duration-300"
              {...getStrokeProps(1)}
            />
            <text
              x="310"
              y="131"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              Analisis
            </text>
            <text
              x="310"
              y="142"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              &amp; Konsep
            </text>

            {/* Node 2 */}
            <circle
              cx="310"
              cy="285"
              r="22"
              fill="white"
              className="transition-all duration-300"
              {...getStrokeProps(2)}
            />
            <text
              x="310"
              y="281"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              Pengem
            </text>
            <text
              x="310"
              y="292"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              -bangan
            </text>

            {/* Node 3 */}
            <circle
              cx="190"
              cy="350"
              r="22"
              fill="white"
              className="transition-all duration-300"
              {...getStrokeProps(3)}
            />
            <text
              x="190"
              y="346"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              Dokumen
            </text>
            <text
              x="190"
              y="357"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              Konstruksi
            </text>

            {/* Node 4 (maps to step 5 in UI index 4) */}
            <circle
              cx="70"
              cy="135"
              r="22"
              fill="white"
              className="transition-all duration-300"
              {...getStrokeProps(4)}
            />
            <text
              x="70"
              y="131"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              Pengawas
            </text>
            <text
              x="70"
              y="142"
              textAnchor="middle"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="8"
              fontWeight="300"
              fill="#1a1916"
            >
              -an
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
