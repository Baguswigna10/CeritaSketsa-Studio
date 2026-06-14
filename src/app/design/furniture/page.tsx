import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function FurniturePage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 md:px-20 lg:px-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-3 block">
              Portfolio / Design
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-text mb-6">
              Bespoke <em className="italic font-light text-dark-muted">Furniture</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami merancang dan memproduksi lini furnitur kustom secara terbatas untuk memastikan kecocokan materialitas dengan konsep keseluruhan ruang Anda.
            </p>
          </div>

          {/* Catalog / Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Item 1 */}
            <div className="group">
              <div className="overflow-hidden bg-[#e4e1db] aspect-[3/4] mb-4 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 200 250"
                  width="130"
                  className="opacity-40 text-text transition-transform duration-700 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="50" y="80" width="100" height="90" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="50" y1="170" x2="50" y2="220" stroke="currentColor" strokeWidth="1" />
                  <line x1="150" y1="170" x2="150" y2="220" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="80" x2="30" y2="170" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="150" y1="80" x2="170" y2="170" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>
              <span className="text-[9px] font-light tracking-[0.15em] uppercase text-muted block mb-1">
                Katalog · Kursi makan
              </span>
              <h3 className="font-serif text-lg font-normal text-text mb-2">
                Nirvana Lounge Chair
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Kursi santai dari material kayu mahoni solid dengan anyaman rotan halus, dibuat secara manual di Jepara.
              </p>
            </div>

            {/* Item 2 */}
            <div className="group">
              <div className="overflow-hidden bg-[#ede9e3] aspect-[3/4] mb-4 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 200 250"
                  width="130"
                  className="opacity-40 text-text transition-transform duration-700 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="30" y="100" width="140" height="40" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="45" y1="140" x2="45" y2="210" stroke="currentColor" strokeWidth="1" />
                  <line x1="155" y1="140" x2="155" y2="210" stroke="currentColor" strokeWidth="1" />
                  <line x1="30" y1="100" x2="30" y2="140" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="170" y1="100" x2="170" y2="140" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>
              <span className="text-[9px] font-light tracking-[0.15em] uppercase text-muted block mb-1">
                Katalog · Meja Makan
              </span>
              <h3 className="font-serif text-lg font-normal text-text mb-2">
                Selasar Solid Dining Table
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Meja makan berdesain minimalis dengan ketebalan kayu jati 4cm, menonjolkan keindahan serat alami kayu.
              </p>
            </div>

            {/* Item 3 */}
            <div className="group">
              <div className="overflow-hidden bg-[#e6e2dc] aspect-[3/4] mb-4 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 200 250"
                  width="120"
                  className="opacity-40 text-text transition-transform duration-700 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="100" y1="150" x2="100" y2="220" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="220" r="8" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>
              <span className="text-[9px] font-light tracking-[0.15em] uppercase text-muted block mb-1">
                Katalog · Lampu Gantung
              </span>
              <h3 className="font-serif text-lg font-normal text-text mb-2">
                Aura Pendant Brass Lamp
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Koleksi lampu gantung kuningan dengan metode ketukan tangan tradisional yang memancarkan cahaya lembut.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
