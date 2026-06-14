import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 md:px-20 lg:px-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-3 block">
              Studio / About Us
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-text mb-6">
              FORMA Architecture <em className="italic font-light text-dark-muted">Studio</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami adalah kolektif arsitek dan desainer berbasis di Jakarta yang berkomitmen menghadirkan karya desain kontekstual, bermakna, dan berkelanjutan.
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 py-12 border-y border-light-border">
            <div>
              <h2 className="font-serif text-3xl font-light text-text mb-4">Filosofi Kami</h2>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-4">
                Kami percaya bahwa arsitektur yang baik tidak hanya sekadar membangun ruang fisik, tetapi juga menciptakan tempat berlindung yang menghormati tapak alam, budaya lokal, dan kenyamanan hidup penggunanya.
              </p>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Di FORMA, setiap garis rancangan berawal dari analisis mendalam untuk melahirkan kesederhanaan bentuk dengan efisiensi fungsi yang maksimal.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-light text-text mb-4">Tim Pendiri</h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-text uppercase">Baskoro Adi, IAI</h4>
                  <span className="text-[10px] font-light text-muted uppercase">Principal Architect / Co-Founder</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text uppercase">Dian Paramita</h4>
                  <span className="text-[10px] font-light text-muted uppercase">Lead Interior Designer / Co-Founder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 className="font-serif text-3xl font-light text-text mb-8">Penghargaan</h2>
            <div className="flex flex-col border-t border-light-border">
              <div className="flex justify-between py-4 border-b border-light-border text-xs font-light">
                <span className="text-text font-normal">Indonesian Young Architect Award (IAI)</span>
                <span className="text-dark-muted">Pemenang Kategori Residensial · 2024</span>
              </div>
              <div className="flex justify-between py-4 border-b border-light-border text-xs font-light">
                <span className="text-text font-normal">Green Design Award Indonesia</span>
                <span className="text-dark-muted">Nusantara Hub - Karya Berkelanjutan Terbaik · 2023</span>
              </div>
              <div className="flex justify-between py-4 border-b border-light-border text-xs font-light">
                <span className="text-text font-normal">Bandung Design Awards</span>
                <span className="text-dark-muted">Tata Ruang Publik Terinovatif · 2022</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
