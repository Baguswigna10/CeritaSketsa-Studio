import PortfolioProject from "@/components/PortfolioProject";

export const metadata = {
  title: "Nusantara Hub — Commercial | CeritaSketsa Studio",
  description:
    "Nusantara Hub — Pusat inkubasi bisnis kreatif dan ruang kerja bersama di Bandung dengan sirkulasi udara alami dan panel surya terintegrasi.",
};

export default function CommercialDetailPage() {
  return (
    <PortfolioProject
          category="Commercial Project"
          title="Nusantara Hub"
          subtitle="Pusat inkubasi bisnis kreatif dan ruang kerja bersama di Bandung dengan nuansa lokal yang kuat dan teknologi hijau terintegrasi."
          heroImage="/nusantara_hub.png"
          overviewImage="/galeri_kota.png"
          overviewTitle="Ruang Kolaborasi Masa Depan dengan Identitas Lokal"
          overviewDescription="Nusantara Hub dirancang sebagai ekosistem bisnis kreatif yang menggabungkan ruang kerja bersama, studio produksi, dan galeri pameran dalam satu kawasan. Fasad menggunakan material lokal seperti bambu laminasi dan batik panel sebagai elemen estetik sekaligus fungsional."
          info={[
            { label: "Client", value: "PT Nusantara Creative" },
            { label: "Location", value: "Bandung, Jawa Barat" },
            { label: "Year", value: "2023" },
            { label: "Building Area", value: "2.400 m²" },
            { label: "Site Area", value: "3.200 m²" },
            { label: "Status", value: "Completed" },
          ]}
          features={[
            { title: "Co-Working Space" },
            { title: "Solar Panel System" },
            { title: "Natural Ventilation" },
            { title: "Rooftop Garden" },
            { title: "Exhibition Area" },
            { title: "Smart Building" },
            { title: "EV Charging" },
            { title: "Local Material" },
          ]}
          gallery={[
            { src: "/nusantara_hub.png", alt: "Nusantara Hub exterior" },
            { src: "/galeri_kota.png", alt: "Interior common area" },
            { src: "/kampung_vertikal.png", alt: "Rooftop garden" },
          ]}
      />
  );
}
