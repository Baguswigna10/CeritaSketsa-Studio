import React from "react";

interface TestimonialData {
  quote: string;
  avatar: string;
  name: string;
  role: string;
}

const testimonialsData: TestimonialData[] = [
  {
    quote: '"Forma memahami visi kami dari awal. Hasilnya melampaui ekspektasi — rumah kami kini terasa seperti karya seni yang bisa dihuni."',
    avatar: "RP",
    name: "Rizky Pratama",
    role: "Klien Hunian, Jakarta · 2024",
  },
  {
    quote: '"Proses yang terstruktur dan komunikasi yang sangat baik. Tim Forma profesional dalam setiap aspek, dari desain hingga pengawasan konstruksi."',
    avatar: "SA",
    name: "Sari Andini",
    role: "Direktur, PT Nusantara Properti · 2023",
  },
  {
    quote: '"Kepekaan mereka terhadap konteks lokal luar biasa. Bangunan kami merespons iklim tropis dengan sangat elegan tanpa mengorbankan estetika modern."',
    avatar: "BW",
    name: "Budi Wicaksono",
    role: "Yayasan Budaya Kota, Bandung · 2023",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 py-24 md:px-20 lg:px-32 bg-white">
      <div className="section-eyebrow reveal mb-2 flex items-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase text-muted before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-muted">
        Klien Kami
      </div>
      <h2 className="section-title reveal font-serif text-3xl md:text-5xl font-light leading-[1.15] tracking-tight text-text">
        Apa yang mereka
        <br />
        <em className="italic font-light text-dark-muted">katakan</em>
      </h2>

      <div className="testimonials-grid grid grid-cols-1 lg:grid-cols-3 gap-0 mt-16 border-t border-light-border">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className={`testimonial reveal p-8 border-b lg:border-b border-light-border lg:border-r last:border-r-0 hover:bg-warm-gray/30 transition-colors duration-200 ${
              (index + 1) % 3 === 0 ? "lg:border-r-0" : ""
            }`}
          >
            <p className="testimonial-quote font-serif text-lg font-light italic text-text leading-relaxed mb-6">
              {item.quote}
            </p>
            <div className="testimonial-author flex items-center gap-3">
              <div className="author-avatar w-8 h-8 rounded-full bg-warm-gray border border-light-border flex items-center justify-center text-[11px] font-light text-dark-muted select-none">
                {item.avatar}
              </div>
              <div>
                <span className="author-name text-[11px] font-normal text-text block leading-tight">
                  {item.name}
                </span>
                <span className="author-role text-[10px] font-light text-muted tracking-wide">
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
