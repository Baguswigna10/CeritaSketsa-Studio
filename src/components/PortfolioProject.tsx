import Nav from "./Nav";
import Footer from "./Footer";
import Image from "next/image";

/* ── Types ─────────────────────────────────────── */
export interface ProjectInfo {
  label: string;
  value: string;
}

export interface ProjectFeature {
  title: string;
}

export interface GalleryImage {
  src: string;
  alt?: string;
}

export interface PortfolioProjectProps {
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overviewImage: string;
  overviewTitle: string;
  overviewDescription: string;
  info: ProjectInfo[];
  features: ProjectFeature[];
  gallery: GalleryImage[];
}

/* ── Main Component ─────────────────────────────── */
export default function PortfolioProject({
  category,
  title,
  subtitle,
  heroImage,
  overviewImage,
  overviewTitle,
  overviewDescription,
  info,
  features,
  gallery,
}: PortfolioProjectProps) {
  return (
    <>
      <Nav />

      <section className="bg-[#F8F7F4]">

        {/* ── Hero — full width ────────────────────────────── */}
        <div className="relative h-[85vh] overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-12 px-8 md:px-20 lg:px-32 text-white w-full">
            <span className="uppercase tracking-[0.2em] text-sm opacity-80">
              {category}
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl mt-4 font-light leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-white/75 max-w-lg text-sm leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* padded content below hero */}
        <div className="px-8 py-16 md:px-20 lg:px-32">

          {/* ── Overview ─────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-20 py-24">


            {/* Gallery snapshot */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={overviewImage}
                alt={overviewTitle}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="uppercase tracking-[0.15em] text-[11px] text-neutral-500 font-light">
                Project Overview
              </span>

              <h2 className="font-serif text-4xl lg:text-5xl mt-4 font-light leading-snug text-neutral-900">
                {overviewTitle}
              </h2>

              <p className="mt-6 text-neutral-600 leading-relaxed text-sm">
                {overviewDescription}
              </p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-12 mt-10">
                {info.map((item) => (
                  <InfoItem key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Highlights ───────────────────────────────── */}
          {features.length > 0 && (
            <div className="py-20 border-t border-neutral-200">
              <div className="text-center mb-16">
                <h3 className="font-serif text-4xl font-light text-neutral-900">
                  Project Highlights
                </h3>
                <p className="text-neutral-500 mt-3 text-sm">
                  Fitur utama yang menjadi karakter proyek.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {features.map((f) => (
                  <FeatureItem key={f.title} title={f.title} />
                ))}
              </div>
            </div>
          )}

          {/* ── Gallery Grid ─────────────────────────────── */}
          {gallery.length > 0 && (
            <div className="py-24">
              <h3 className="font-serif text-4xl font-light text-neutral-900 text-center mb-12">
                Project Gallery
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* First tall image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={gallery[0].src}
                    alt={gallery[0].alt ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right column — remaining images */}
                <div className="grid gap-6">
                  {gallery.slice(1, 3).map((img, i) => (
                    <div key={i} className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt ?? ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

/* ── Sub-components ─────────────────────────────── */
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-neutral-400 uppercase tracking-[0.1em] font-light">{label}</p>
      <p className="mt-1 text-base text-neutral-800">{value}</p>
    </div>
  );
}

function FeatureItem({ title }: { title: string }) {
  return (
    <div className="text-center group">
      <div className="w-14 h-14 mx-auto rounded-full border border-neutral-300 mb-4 flex items-center justify-center transition-colors duration-300 group-hover:border-neutral-600 group-hover:bg-neutral-100">
        <span className="w-2 h-2 rounded-full bg-neutral-400 group-hover:bg-neutral-700 transition-colors duration-300" />
      </div>
      <p className="text-xs tracking-wide font-light text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">
        {title}
      </p>
    </div>
  );
}
