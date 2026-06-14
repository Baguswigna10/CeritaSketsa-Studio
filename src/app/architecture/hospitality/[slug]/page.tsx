import PortfolioProject from "@/components/PortfolioProject";

export const metadata = {
  title: "Green Valley Ecological Resort — Hospitality | CeritaSketsa Studio",
  description:
    "Green Valley Ecological Resort — Desain resor ramah lingkungan berbasis bambu di Bali yang terintegrasi dengan lansekap sawah berundak.",
};

export default function HospitalityDetailPage() {
  return (
    <PortfolioProject
          category="Hospitality Project"
          title="Green Valley Ecological Resort"
          subtitle="Resor ramah lingkungan berbasis bambu yang terintegrasi harmonis dengan lansekap sawah berundak khas Bali."
          heroImage="/kampung_vertikal.png"
          overviewImage="/villa_arjuna.png"
          overviewTitle="Resor Ekologi dengan Pengalaman Alam yang Autentik"
          overviewDescription="Green Valley Ecological Resort hadir sebagai destinasi wisata berkelanjutan yang mengedepankan konservasi alam dan budaya lokal Bali. Setiap unit dirancang menyatu dengan kontur lahan sawah, menggunakan material bambu dan alang-alang yang bersumber dari petani lokal."
          info={[
            { label: "Client", value: "PT Green Valley Resort" },
            { label: "Location", value: "Ubud, Bali" },
            { label: "Year", value: "2024" },
            { label: "Building Area", value: "4.800 m²" },
            { label: "Site Area", value: "12.000 m²" },
            { label: "Status", value: "Completed" },
          ]}
          features={[
            { title: "Eco-Friendly Design" },
            { title: "Bamboo Structure" },
            { title: "Rice Field View" },
            { title: "Infinity Pool" },
            { title: "Wellness Spa" },
            { title: "Farm-to-Table" },
            { title: "Solar Energy" },
            { title: "Rainwater Harvest" },
          ]}
          gallery={[
            { src: "/kampung_vertikal.png", alt: "Resort aerial view" },
            { src: "/villa_arjuna.png", alt: "Resort villa unit" },
            { src: "/rumah_prambanan.png", alt: "Pool terrace" },
          ]}
      />
  );
}
