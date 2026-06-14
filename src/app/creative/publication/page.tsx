import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PublicationPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 md:px-20 lg:px-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-3 block">
              Portfolio / Creative
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-text mb-6">
              Publications <em className="italic font-light text-dark-muted">& Press</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Karya rancangan kami telah didokumentasikan dan diulas di berbagai media arsitektur nasional maupun internasional terkemuka.
            </p>
          </div>

          {/* Publication List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pub 1 */}
            <div className="border border-light-border p-8 hover:bg-warm-gray transition-colors duration-200">
              <span className="text-[9px] font-light tracking-wider text-muted block mb-4">Majalah / Indonesia Design</span>
              <h3 className="font-serif text-xl font-normal text-text mb-3">Villa Arjuna: Merespons Kontur Bukit</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-6">
                Ulasan mendalam sebanyak 6 halaman mengenai integrasi struktur beton Villa Arjuna dengan kontur perbukitan hijau Sentul.
              </p>
              <span className="text-[10px] font-light text-muted uppercase">Edisi Juni 2024</span>
            </div>

            {/* Pub 2 */}
            <div className="border border-light-border p-8 hover:bg-warm-gray transition-colors duration-200">
              <span className="text-[9px] font-light tracking-wider text-muted block mb-4">Buku / ArchDaily Architecture Yearbook</span>
              <h3 className="font-serif text-xl font-normal text-text mb-3">Selected Asian Studios</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-6">
                FORMA terpilih sebagai salah satu studio arsitektur muda Indonesia yang berkontribusi dalam arsitektur berkelanjutan.
              </p>
              <span className="text-[10px] font-light text-muted uppercase">Tahun Rilis 2023</span>
            </div>

            {/* Pub 3 */}
            <div className="border border-light-border p-8 hover:bg-warm-gray transition-colors duration-200">
              <span className="text-[9px] font-light tracking-wider text-muted block mb-4">Portal / DesignBoom</span>
              <h3 className="font-serif text-xl font-normal text-text mb-3">Nusantara Hub Green Terraces</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-6">
                Ulasan arsitektural tentang fasad hijau berundak Nusantara Hub sebagai jawaban ruang kerja tropis perkotaan modern.
              </p>
              <span className="text-[10px] font-light text-muted uppercase">Terbit Oktober 2023</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
