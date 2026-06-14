import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-8 md:px-20 lg:px-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted mb-3 block">
              Studio / Services
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-text mb-6">
              Our Professional <em className="italic font-light text-dark-muted">Services</em>
            </h1>
            <p className="text-sm font-light text-dark-muted leading-relaxed max-w-[600px]">
              Kami mendampingi Anda melewati setiap fase desain dan pembangunan — memastikan realisasi fisik yang presisi sesuai standar kualitas tertinggi.
            </p>
          </div>

          {/* In-depth Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-light-border pt-12">
            <div>
              <span className="text-[10px] font-semibold text-muted tracking-wider block mb-2">01 / ARCHITECTURE DESIGN</span>
              <h3 className="font-serif text-2xl font-normal text-text mb-3">Desain Arsitektur</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-6">
                Kami merancang skema bangunan dari konsepsi awal, perizinan gedung (PBG), dokumen tender, hingga pengawasan berkala di lapangan. Fokus kami adalah arsitektur yang berumur panjang dan bernilai tinggi.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-muted tracking-wider block mb-2">02 / INTERIOR DESIGN</span>
              <h3 className="font-serif text-2xl font-normal text-text mb-3">Desain Interior</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-6">
                Dari pencahayaan khusus (*custom lighting*), pemilihan material lantai dan dinding, hingga perancangan kabinet/furnitur tanam (*built-in*). Kami merancang ruang dalam yang senada dengan eksterior bangunan.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-muted tracking-wider block mb-2">03 / SITE PLANNING</span>
              <h3 className="font-serif text-2xl font-normal text-text mb-3">Perencanaan Tapak & Lanskap</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-6">
                Analisis lingkungan mikro, topografi, dan drainase air hujan tapak. Kami mengintegrasikan area terbuka hijau secara seimbang dengan bangunan utama demi kenyamanan termal luar ruangan.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-muted tracking-wider block mb-2">04 / PROJECT MANAGEMENT</span>
              <h3 className="font-serif text-2xl font-normal text-text mb-3">Manajemen & Pengawasan Proyek</h3>
              <p className="text-xs font-light text-dark-muted leading-relaxed mb-6">
                Kami membantu mengelola proses konstruksi dengan kontraktor eksternal, memastikan pengerjaan sesuai dengan standar gambar kerja konstruksi (DED), kepatuhan material, serta jadwal waktu pengerjaan.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
