"use client";

import React, { useState } from "react";

const InstagramIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4 L20 20 M20 4 L4 20" />
  </svg>
);

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <section id="contact" className="px-8 py-24 md:px-20 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <div className="reveal mb-2 flex items-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase text-muted before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-muted">
            Hubungi Kami
          </div>
          <h2 className="reveal font-serif text-3xl md:text-5xl font-light leading-[1.15] tracking-tight text-text mb-12">
            Mulai projek <br />
            <em className="italic font-light text-dark-muted">bersama kami</em>
          </h2>

          <div className="reveal delay-1 space-y-8 text-text">
            <div>
              <p className="text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">Email Resmi</p>
              <a
                href="mailto:halo@ceritasketsa.com"
                className="font-serif text-xl md:text-2xl font-light text-text hover:text-dark-muted transition-colors duration-200"
              >
                halo@ceritasketsa.com
              </a>
            </div>

            <div>
              <p className="text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">Telepon Kantor</p>
              <a
                href="tel:+6221555001"
                className="font-serif text-xl md:text-2xl font-light text-text hover:text-dark-muted transition-colors duration-200"
              >
                +62 21 555 001
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="reveal delay-2 mt-12">
            <p className="text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-4">Ikuti Kami</p>

            <div className="flex items-center gap-4">
              {[
                { icon: <InstagramIcon />, label: "Instagram", url: "#" },
                { icon: <LinkedinIcon />, label: "LinkedIn", url: "#" },
                { icon: <TwitterIcon />, label: "Twitter", url: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-light-border flex items-center justify-center text-dark-muted hover:text-text hover:border-text transition-all duration-300 bg-transparent"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          {submitted ? (
            <div className="bg-warm-gray p-8 border border-light-border text-center flex flex-col items-center justify-center min-h-[420px] reveal">
              <svg
                className="w-12 h-12 text-dark-muted mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.8}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-serif text-2xl font-light text-text mb-3">
                Pesan Terkirim
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed max-w-[320px] mb-8">
                Terima kasih telah menghubungi kami. Tim arsitek kami akan meninjau pesan Anda dan merespons dalam 24 jam.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[10px] font-light tracking-[0.12em] uppercase text-text border border-light-border px-6 py-3 hover:bg-white transition-colors duration-200 cursor-pointer"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-warm-gray p-8 border border-light-border reveal delay-1 flex flex-col gap-6"
            >
              <div>
                <label className="block text-[10px] font-light tracking-wider uppercase text-muted mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="contoh: Rizky Pratama"
                  className="w-full bg-white border border-light-border px-4 py-3 text-xs font-light text-text outline-none focus:border-dark-muted transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-[10px] font-light tracking-wider uppercase text-muted mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh: rizky@email.com"
                  className="w-full bg-white border border-light-border px-4 py-3 text-xs font-light text-text outline-none focus:border-dark-muted transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-[10px] font-light tracking-wider uppercase text-muted mb-2">
                  Pesan atau Rencana Proyek
                </label>
                <textarea
                  rows={6}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="contoh: Rencana pembangunan villa hunian modern 2 lantai di Sentul dengan luas tanah 300 m2..."
                  className="w-full bg-white border border-light-border px-4 py-3 text-xs font-light text-text outline-none focus:border-dark-muted transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-[11px] font-light tracking-[0.12em] uppercase text-white bg-text border-none px-6 py-4 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}