import React from "react";

export default function Footer() {
  return (
    <footer className="bg-off-white px-8 py-16 md:px-20 lg:px-32 border-t border-light-border mt-auto">
      {/* Footer Grid */}
      <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
        <div className="footer-brand max-w-[260px]">
          <span className="font-serif text-xl font-normal tracking-[0.12em] uppercase text-text mb-4 block select-none">
            <img src="/logo-CS.png" alt="CS Logo" className="h-6 md:h-8 w-auto object-contain" />
          </span>
          <p className="text-xs font-light text-dark-muted leading-relaxed">
            Studio arsitektur berbasis di Jakarta, berdedikasi pada desain yang bermakna, berkelanjutan, dan kontekstual.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-5">
            Layanan
          </p>
          <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
            <li>
              <a href="/architecture/commercial" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Desain Arsitektur
              </a>
            </li>
            <li>
              <a href="/design/interior" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Desain Interior
              </a>
            </li>
            <li>
              <a href="/architecture/hospitality-3d" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Perencanaan Tapak
              </a>
            </li>
            <li>
              <a href="/studio/services" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Manajemen Proyek
              </a>
            </li>
            <li>
              <a href="/studio/contact" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Konsultasi
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-5">
            Studio
          </p>
          <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
            <li>
              <a href="/studio/about-us" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/studio/about-us" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Tim
              </a>
            </li>
            <li>
              <a href="/architecture/commercial" className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200">
                Portofolio
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-5">
            Kontak
          </p>
          <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
            <li>
              <a
                href="mailto:halo@formastudio.id"
                className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200"
              >
                ceritasketsa@studio.id
              </a>
            </li>
            <li>
              <a
                href="tel:+6221555001"
                className="text-xs font-light text-dark-muted hover:text-text transition-colors duration-200"
              >
                +62 21 555 001
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-light-border text-center sm:text-left">
        <p className="text-[11px] font-light text-muted">
          © 2025 CeritaSketsa Studio. Semua hak dilindungi.
        </p>
        <p className="text-[11px] font-light text-muted">
          Jakarta · Bandung
        </p>
      </div>
    </footer>
  );
}
