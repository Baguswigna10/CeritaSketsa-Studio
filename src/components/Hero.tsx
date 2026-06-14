"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix: string;
  trigger: boolean;
}

const StatCounter: React.FC<CounterProps> = ({ target, suffix, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      const current = Math.floor(eased * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, trigger]);

  return (
    <span className="font-serif text-3xl md:text-4xl font-light tracking-tight text-text block">
      {count}
      {suffix}
    </span>
  );
};

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-20 lg:px-32">
      <div className="max-w-4xl text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-text mb-6">
          Dirancang untuk Kehidupan
          <br />
          Dibangun untuk Anda
        </h1>

        <p className="text-[13px] font-light text-dark-muted leading-relaxed max-w-[500px] mx-auto mb-12">
          Kami merancang ruang yang menyeimbangkan estetika, fungsi, dan
          keberlanjutan — dari konsep awal hingga realisasi penuh.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href="#projects"
            className="text-[11px] font-light tracking-[0.12em] uppercase text-white bg-text px-8 py-3.5 hover:opacity-80 transition-opacity duration-200"
          >
            Lihat Portofolio
          </a>

          <a
            href="#process"
            className="text-[11px] font-light tracking-[0.1em] uppercase text-dark-muted hover:text-text flex items-center gap-2 transition-colors duration-200 after:content-['→']"
          >
            Cara Kerja Kami
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex justify-center gap-8 md:gap-12 mt-16"
        >
          <div>
            <StatCounter target={142} suffix="+" trigger={statsVisible} />
            <span className="block text-[10px] font-light tracking-[0.12em] uppercase text-muted">
              Proyek Selesai
            </span>
          </div>

          <div>
            <StatCounter target={16} suffix="" trigger={statsVisible} />
            <span className="block text-[10px] font-light tracking-[0.12em] uppercase text-muted">
              Tahun Pengalaman
            </span>
          </div>

          <div>
            <StatCounter target={24} suffix="" trigger={statsVisible} />
            <span className="block text-[10px] font-light tracking-[0.12em] uppercase text-muted">
              Penghargaan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
