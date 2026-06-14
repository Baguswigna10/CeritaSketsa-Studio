import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Hospitality3DPage() {
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
              Hospitality & <em className="italic font-light text-dark-muted">3D Projects</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami menghadirkan visualisasi 3D kelas dunia dan rancangan destinasi rekreasi/perhotelan yang mengesankan serta berkelanjutan.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#ebe7e1] aspect-[4/3] mb-4 relative">
                <img
                  src="/kampung_vertikal.png"
                  alt="Green Valley Resort & Spa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                Hospitality · Bali, 2024
              </span>
              <h3 className="font-serif text-2xl font-normal text-text mb-2">
                Green Valley Ecological Resort
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Desain resor ramah lingkungan berbasis bambu terintegrasi dengan lansekap sawah berundak khas Bali.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-[#e8e4de] aspect-[4/3] mb-4 relative">
                <img
                  src="/villa_arjuna.png"
                  alt="Clifftop Villa Hotel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter grayscale-[15%]"
                />
              </div>
              <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                3D Rendering · Lombok, 2023
              </span>
              <h3 className="font-serif text-2xl font-normal text-text mb-2">
                Amarta Bay Boutique Resort
              </h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed">
                Visualisasi 3D berkualitas fotorealistik untuk proyek resor pantai bintang lima dengan pencahayaan dramatis dan material alami.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
