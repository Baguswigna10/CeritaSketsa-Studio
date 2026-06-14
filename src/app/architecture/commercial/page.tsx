import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Commercial Projects | CeritaSketsa Studio",
  description:
    "Portofolio proyek komersial CeritaSketsa Studio — ruang kerja, perkantoran, dan kawasan bisnis modern yang mendorong produktivitas dan kolaborasi.",
};

const projects = [
  {
    slug: "nusantara-hub",
    image: "/nusantara_hub.png",
    category: "Komersial",
    location: "Bandung, 2023",
    title: "Nusantara Hub",
    description:
      "Pusat inkubasi bisnis kreatif dan ruang kerja bersama dengan sirkulasi udara alami dan panel surya terintegrasi.",
  },
  {
    slug: "sinergi-office",
    image: "/galeri_kota.png",
    category: "Komersial",
    location: "Jakarta, 2022",
    title: "Sinergi Office & Creative Plaza",
    description:
      "Kompleks perkantoran ramah lingkungan dengan fasad kaca hemat energi dan taman atap komunal.",
  },
];

export default function CommercialPage() {
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
              Commercial{" "}
              <em className="italic font-light text-dark-muted">Projects</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami merancang ruang komersial yang meningkatkan produktivitas, mendorong kolaborasi,
              dan mencerminkan identitas korporat modern.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <a
                key={project.slug}
                href={`/architecture/commercial/${project.slug}`}
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div className="overflow-hidden bg-[#ede9e3] aspect-[4/3] mb-4 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] filter grayscale-[15%]"
                  />
                  <div className="absolute inset-0 bg-text/0 group-hover:bg-text/15 transition-colors duration-500" />
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 text-[9px] font-light tracking-[0.18em] uppercase text-white border border-white/60 px-4 py-2">
                      Lihat Detail →
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-light tracking-[0.18em] uppercase text-muted block mb-1">
                  {project.category} · {project.location}
                </span>
                <h3 className="font-serif text-2xl font-normal text-text mb-2 group-hover:text-dark-muted transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs font-light text-dark-muted leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
