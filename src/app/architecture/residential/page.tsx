import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ResidentialPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 md:px-20 lg:px-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-3 block">
              Portfolio / Architecture
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-text mb-6">
              Residential <em className="italic font-light text-dark-muted">Projects</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami merancang hunian personal yang menyeimbangkan kenyamanan privasi dengan keindahan arsitektur tropis kontemporer.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#e8e4de] aspect-[4/3] mb-4 relative">
                <img
                  src="/villa_arjuna.png"
                  alt="Villa Arjuna"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                Hunian · Sentul, 2024
              </span>
              <h3 className="font-serif text-2xl font-normal text-text mb-2">
                Villa Arjuna — Rumah Tropis Kontemporer di Perbukitan
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Villa mewah yang memanfaatkan topografi perbukitan alami, memadukan beton ekspos dengan material kayu jati hangat.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#e6e2dc] aspect-[4/3] mb-4 relative">
                <img
                  src="/rumah_prambanan.png"
                  alt="Rumah Prambanan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                Hunian · Yogyakarta, 2022
              </span>
              <h3 className="font-serif text-2xl font-normal text-text mb-2">
                Rumah Prambanan — Modernitas berbalut Tradisi
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Hunian minimalis yang mengadaptasi filosofi arsitektur tradisional Jawa dengan sirkulasi silang dan pencahayaan optimal.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
