import PortfolioProject from "@/components/PortfolioProject";

export const metadata = {
  title: "Villa Arjuna — Residential | CeritaSketsa Studio",
  description:
    "Villa Arjuna — Rumah tropis kontemporer di perbukitan Sentul. Desain hunian mewah memadukan beton ekspos dengan material kayu jati hangat.",
};

export default function ResidentialDetailPage() {
  return (
    <PortfolioProject
          category="Residential Project"
          title="Villa Arjuna"
          subtitle="Perpaduan arsitektur tropis kontemporer dan topografi perbukitan Sentul yang menciptakan ruang hidup hangat dan terbuka."
          heroImage="/villa_arjuna.png"
          overviewImage="/rumah_prambanan.png"
          overviewTitle="Hunian Tropis dengan Pencahayaan Alami Maksimal"
          overviewDescription="Proyek ini dirancang untuk mengoptimalkan cahaya alami dan ventilasi silang. Setiap ruang memiliki hubungan langsung dengan taman sehingga menciptakan pengalaman tinggal yang lebih sehat dan nyaman. Beton ekspos dikombinasikan dengan material kayu jati lokal untuk sentuhan hangat yang tetap modern."
          info={[
            { label: "Client", value: "Private Client" },
            { label: "Location", value: "Sentul, Jawa Barat" },
            { label: "Year", value: "2024" },
            { label: "Building Area", value: "650 m²" },
            { label: "Site Area", value: "900 m²" },
            { label: "Status", value: "Completed" },
          ]}
          features={[
            { title: "Natural Lighting" },
            { title: "Cross Ventilation" },
            { title: "Open Space Layout" },
            { title: "Sustainable Material" },
            { title: "Inner Courtyard" },
            { title: "Smart Lighting" },
            { title: "Rainwater System" },
            { title: "Landscape Garden" },
          ]}
          gallery={[
            { src: "/villa_arjuna.png", alt: "Villa Arjuna exterior" },
            { src: "/rumah_prambanan.png", alt: "Interior living area" },
            { src: "/kampung_vertikal.png", alt: "Garden and terrace" },
          ]}
      />
  );
}
