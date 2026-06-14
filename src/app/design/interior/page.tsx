import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function InteriorPage() {
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
              Interior <em className="italic font-light text-dark-muted">Design</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami merancang interior yang menyatu secara struktural dan konseptual dengan arsitektur eksterior, mengedepankan materialitas alami dan detail halus.
            </p>
          </div>

          {/* Service breakdown / Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border border-light-border p-8 hover:bg-warm-gray transition-colors duration-200">
              <span className="text-[10px] font-light text-muted block mb-4">01 / Residential Interior</span>
              <h3 className="font-serif text-xl font-normal text-text mb-3">Living Spaces</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Ruang keluarga dan area komunal yang berfokus pada kehangatan pencahayaan alami dan pemilihan furnitur custom.
              </p>
            </div>

            <div className="border border-light-border p-8 hover:bg-warm-gray transition-colors duration-200">
              <span className="text-[10px] font-light text-muted block mb-4">02 / Workplace Interior</span>
              <h3 className="font-serif text-xl font-normal text-text mb-3">Modern Offices</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Merancang lingkungan kerja fleksibel yang meningkatkan produktivitas melalui akustik yang baik dan zonasi yang matang.
              </p>
            </div>

            <div className="border border-light-border p-8 hover:bg-warm-gray transition-colors duration-200">
              <span className="text-[10px] font-light text-muted block mb-4">03 / Commercial Design</span>
              <h3 className="font-serif text-xl font-normal text-text mb-3">Retail & Cafes</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Membangun pengalaman spasial yang kuat untuk memperkuat identitas brand bisnis kuliner atau butik ritel Anda.
              </p>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#e8e4de] aspect-video mb-4 relative">
                <img
                  src="/rumah_prambanan.png"
                  alt="Minimalist Living Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <h4 className="font-serif text-xl font-normal text-text mb-2">Modernist Lounge, Residence Yogya</h4>
              <p className="text-xs font-light text-dark-muted">Detail furnitur kayu jati solid yang dipadukan dengan dinding batu alam lokal.</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#ede9e3] aspect-video mb-4 relative">
                <img
                  src="/nusantara_hub.png"
                  alt="Co-working Space Interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <h4 className="font-serif text-xl font-normal text-text mb-2">Collaboration Lounge, Nusantara Hub</h4>
              <p className="text-xs font-light text-dark-muted">Desain interior perkantoran dengan pencahayaan buatan tidak langsung dan area hijau.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
