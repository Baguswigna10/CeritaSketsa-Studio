import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "3D Project | CeritaSketsa Studio",
  description:
    "Visualisasi arsitektur 3D fotorealistik oleh CeritaSketsa Studio — untuk presentasi, pemasaran properti, dan dokumentasi desain.",
};

const projects = [
  {
    image: "/kampung_vertikal.png",
    category: "3D Rendering",
    location: "Bali, 2024",
    title: "Green Valley Ecological Resort",
    description:
      "Visualisasi fotorealistik untuk proyek resor ramah lingkungan berbasis bambu yang terintegrasi dengan lansekap sawah berundak khas Bali.",
  },
  {
    image: "/villa_arjuna.png",
    category: "3D Rendering",
    location: "Lombok, 2023",
    title: "Amarta Bay Boutique Resort",
    description:
      "Visualisasi 3D berkualitas tinggi untuk proyek resor pantai bintang lima dengan pencahayaan dramatis dan material alami.",
  },
  {
    image: "/nusantara_hub.png",
    category: "Architectural Animation",
    location: "Jakarta, 2023",
    title: "Nusantara Hub — Fly-Through",
    description:
      "Animasi arsitektur fly-through untuk presentasi investor kawasan perkantoran kreatif multifungsi di Jakarta.",
  },
  {
    image: "/galeri_kota.png",
    category: "3D Rendering",
    location: "Bandung, 2022",
    title: "Galeri Kota — Interior Visualization",
    description:
      "Visualisasi interior galeri seni kontemporer dengan pencahayaan buatan dramatis dan material premium.",
  },
];

export default function ThreeDProjectPage() {
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
              3D <em className="italic font-light text-dark-muted">Projects</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Visualisasi arsitektur fotorealistik berkualitas tinggi — dari rendering statis
              hingga animasi fly-through yang memukau untuk presentasi dan pemasaran.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="overflow-hidden bg-[#ebe7e1] aspect-[4/3] mb-4 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] filter grayscale-[15%]"
                  />
                </div>
                <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                  {project.category} · {project.location}
                </span>
                <h3 className="font-serif text-2xl font-normal text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-light text-dark-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
