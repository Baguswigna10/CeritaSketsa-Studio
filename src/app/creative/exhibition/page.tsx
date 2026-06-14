import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ExhibitionPage() {
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
              Exhibition <em className="italic font-light text-dark-muted">Design</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami merancang instalasi seni temporer dan paviliun pameran yang menawarkan pengalaman spasial imersif bagi para pengunjung.
            </p>
          </div>

          {/* Project List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#e4e1db] aspect-[4/3] mb-4 relative">
                <img
                  src="/galeri_kota.png"
                  alt="Pavilion Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                Instalasi · Jakarta Art Week, 2024
              </span>
              <h3 className="font-serif text-2xl font-normal text-text mb-2">
                Paviliun Gema — Ruang Kontemplasi Publik
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Struktur bambu parametrik temporal yang mengeksplorasi akustik ruang dan bayangan dinamis di tengah hiruk pikuk kota.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#ede9e3] aspect-[4/3] mb-4 relative">
                <img
                  src="/nusantara_hub.png"
                  alt="Museum Layout"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                Pameran · Bandung Design Biennale, 2023
              </span>
              <h3 className="font-serif text-2xl font-normal text-text mb-2">
                Exhibition Space 'Rumah Masa Depan'
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Desain tata letak pameran menggunakan partisi kertas daur ulang ramah lingkungan untuk memamerkan karya desainer lokal.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
