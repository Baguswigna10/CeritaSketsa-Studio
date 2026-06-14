import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function VideosPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 md:px-20 lg:px-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-3 block">
              Media / Video
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-text mb-6">
              Cinematic <em className="italic font-light text-dark-muted">Walkthroughs</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Saksikan detail spasial dan suasana proyek rancangan kami secara sinematik melalui video penjelajahan ruang (*architectural walkthrough*).
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Video 1 */}
            <div>
              <div className="bg-warm-gray aspect-video mb-4 relative flex items-center justify-center border border-light-border overflow-hidden group">
                <img
                  src="/villa_arjuna.png"
                  alt="Villa Arjuna Video Cover"
                  className="w-full h-full object-cover filter grayscale-[15%] transition-transform duration-700 group-hover:scale-104 opacity-80"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-text/40 opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform duration-200">
                    <svg className="w-6 h-6 text-text fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                Walkthrough · 03:45
              </span>
              <h3 className="font-serif text-xl font-normal text-text mb-2">
                Villa Arjuna: Rumah Bukit Tropis Sentul
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Video detail penjelajahan eksterior kolam renang tebing dan transisi ruang tamu terbuka di Villa Arjuna.
              </p>
            </div>

            {/* Video 2 */}
            <div>
              <div className="bg-warm-gray aspect-video mb-4 relative flex items-center justify-center border border-light-border overflow-hidden group">
                <img
                  src="/nusantara_hub.png"
                  alt="Nusantara Hub Video Cover"
                  className="w-full h-full object-cover filter grayscale-[15%] transition-transform duration-700 group-hover:scale-104 opacity-80"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-text/40 opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform duration-200">
                    <svg className="w-6 h-6 text-text fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                Walkthrough · 02:15
              </span>
              <h3 className="font-serif text-xl font-normal text-text mb-2">
                Nusantara Hub: Ruang Kreatif Bandung
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Menampilkan interaksi pengguna ruang kerja bersama di Nusantara Hub yang dinamis dan terintegrasi dengan alam.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
