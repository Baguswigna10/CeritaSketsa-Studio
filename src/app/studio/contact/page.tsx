"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 md:px-20 lg:px-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-3 block">
              Studio / Contact
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-text mb-6">
              Start Your <em className="italic font-light text-dark-muted">Journey</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Konsultasi pertama gratis. Ceritakan rencana proyek impian Anda dan tim arsitek kami akan merespons dalam 24 jam.
            </p>
          </div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info & Details */}
            <div>
              <div className="mb-12">
                <h3 className="font-serif text-2xl font-light text-text mb-4">Detail Kontak</h3>
                <ul className="list-none flex flex-col gap-4 m-0 p-0 text-xs font-light text-dark-muted">
                  <li>
                    <strong className="text-text block uppercase font-normal text-[10px] tracking-wider mb-1">Kantor Pusat</strong>
                    Jl. Jendral Sudirman No. 88, Senayan, Jakarta Selatan 12190
                  </li>
                  <li>
                    <strong className="text-text block uppercase font-normal text-[10px] tracking-wider mb-1">Email Resmi</strong>
                    <a href="mailto:halo@formastudio.id" className="hover:text-text transition-colors">
                      halo@formastudio.id
                    </a>
                  </li>
                  <li>
                    <strong className="text-text block uppercase font-normal text-[10px] tracking-wider mb-1">Telepon Kantor</strong>
                    <a href="tel:+6221555001" className="hover:text-text transition-colors">
                      +62 21 555 001
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-light text-text mb-4">Studio Cabang</h3>
                <p className="text-xs font-light text-dark-muted leading-relaxed">
                  Kami juga memiliki koordinator perwakilan studio arsitektur aktif untuk area wilayah **Bandung** dan **Bali** untuk peninjauan proyek secara langsung di lapangan.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-warm-gray p-8 border border-light-border">
              <h3 className="font-serif text-2xl font-light text-text mb-6">Formulir Konsultasi</h3>
              <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Pesan terkirim! Tim kami akan menghubungi Anda sesaat lagi."); }}>
                <div>
                  <label className="block text-[10px] font-light tracking-wider uppercase text-muted mb-2">Nama Lengkap</label>
                  <input type="text" required className="w-full bg-white border border-light-border px-4 py-3 text-xs font-light outline-none focus:border-dark-muted transition-colors" placeholder="contoh: Rizky Pratama" />
                </div>
                <div>
                  <label className="block text-[10px] font-light tracking-wider uppercase text-muted mb-2">Alamat Email</label>
                  <input type="email" required className="w-full bg-white border border-light-border px-4 py-3 text-xs font-light outline-none focus:border-dark-muted transition-colors" placeholder="contoh: rizky@email.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-light tracking-wider uppercase text-muted mb-2">Deskripsi Singkat Proyek</label>
                  <textarea rows={4} required className="w-full bg-white border border-light-border px-4 py-3 text-xs font-light outline-none focus:border-dark-muted transition-colors resize-none" placeholder="contoh: Rencana pembangunan villa hunian modern 2 lantai di Sentul dengan luas tanah 300 m2..."></textarea>
                </div>
                <button type="submit" className="text-[11px] font-light tracking-wider uppercase text-white bg-text py-4 cursor-pointer hover:opacity-80 transition-opacity">Kirim Deskripsi Proyek →</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
