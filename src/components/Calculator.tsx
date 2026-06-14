"use client";

import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [area, setArea] = useState<string>("");
  const [type, setType] = useState<string>("1");
  const [quality, setQuality] = useState<string>("3500000");
  const [floors, setFloors] = useState<string>("1");
  const [extras, setExtras] = useState<string>("0");

  const [hasCalculated, setHasCalculated] = useState(false);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [lowRange, setLowRange] = useState<number>(0);
  const [highRange, setHighRange] = useState<number>(0);
  const [constructionCost, setConstructionCost] = useState<number>(0);
  const [designCost, setDesignCost] = useState<number>(0);
  const [permitCost, setPermitCost] = useState<number>(0);

  // Helper function to format rupiah
  const formatRupiah = (amount: number): string => {
    if (amount >= 1_000_000_000) {
      return `Rp ${(amount / 1_000_000_000).toFixed(2)} M`;
    }
    return `Rp ${(amount / 1_000_000).toFixed(0)} jt`;
  };

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const areaVal = parseFloat(area) || 0;
    const typeVal = parseFloat(type);
    const pricePerSqm = parseFloat(quality);
    const floorsVal = parseFloat(floors);
    const extrasVal = parseFloat(extras);

    if (areaVal <= 0) {
      setHasCalculated(false);
      return;
    }

    const construction = areaVal * pricePerSqm * typeVal * floorsVal;
    const design = construction * 0.08;
    const permit = areaVal * 150_000;
    const total = construction + design + permit + extrasVal;
    const low = total * 0.9;
    const high = total * 1.15;

    setConstructionCost(construction);
    setDesignCost(design);
    setPermitCost(permit);
    setTotalCost(total);
    setLowRange(low);
    setHighRange(high);
    setHasCalculated(true);
  };

  // Run calculation reactively whenever any input changes
  useEffect(() => {
    handleCalculate();
  }, [area, type, quality, floors, extras]);

  return (
    <section className="calc-section bg-warm-gray px-8 py-24 md:px-20 lg:px-32" id="calculator">
      <div className="section-eyebrow reveal mb-2 flex items-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase text-muted before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-muted">
        Estimasi Biaya
      </div>
      <h2 className="section-title reveal font-serif text-3xl md:text-5xl font-light leading-[1.15] tracking-tight text-text">
        Hitung biaya <em className="italic font-light text-dark-muted">rancangan</em> <br />
        proyek Anda
      </h2>

      <div className="calc-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
        {/* Form */}
        <div className="calc-form">
          <div className="form-row mb-6">
            <label htmlFor="calc-area" className="block text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">
              Luas Bangunan (m²)
            </label>
            <input
              type="number"
              id="calc-area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full font-sans text-xs font-light text-text bg-white border border-light-border px-4 py-3 outline-none focus:border-dark-muted transition-colors duration-200"
              placeholder="contoh: 150"
              min="0"
            />
          </div>

          <div className="form-row-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="calc-type" className="block text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">
                Tipologi
              </label>
              <select
                id="calc-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full font-sans text-xs font-light text-text bg-white border border-light-border px-4 py-3 outline-none focus:border-dark-muted transition-colors duration-200"
              >
                <option value="1">Hunian</option>
                <option value="1.3">Komersial</option>
                <option value="1.5">Fasilitas Publik</option>
                <option value="1.8">Bangunan Ikonik</option>
              </select>
            </div>
            <div>
              <label htmlFor="calc-quality" className="block text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">
                Kelas Material
              </label>
              <select
                id="calc-quality"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="w-full font-sans text-xs font-light text-text bg-white border border-light-border px-4 py-3 outline-none focus:border-dark-muted transition-colors duration-200"
              >
                <option value="3500000">Standar (Rp 3.5jt/m²)</option>
                <option value="5000000">Menengah (Rp 5jt/m²)</option>
                <option value="7500000">Premium (Rp 7.5jt/m²)</option>
                <option value="12000000">Luxury (Rp 12jt/m²)</option>
              </select>
            </div>
          </div>

          <div className="form-row mb-6">
            <label htmlFor="calc-floors" className="block text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">
              Jumlah Lantai
            </label>
            <select
              id="calc-floors"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
              className="w-full font-sans text-xs font-light text-text bg-white border border-light-border px-4 py-3 outline-none focus:border-dark-muted transition-colors duration-200"
            >
              <option value="1">1 lantai</option>
              <option value="1.15">2 lantai</option>
              <option value="1.25">3 lantai</option>
              <option value="1.4">4+ lantai</option>
            </select>
          </div>

          <div className="form-row mb-6">
            <label htmlFor="calc-extras" className="block text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">
              Fitur Tambahan
            </label>
            <select
              id="calc-extras"
              value={extras}
              onChange={(e) => setExtras(e.target.value)}
              className="w-full font-sans text-xs font-light text-text bg-white border border-light-border px-4 py-3 outline-none focus:border-dark-muted transition-colors duration-200"
            >
              <option value="0">Tidak ada</option>
              <option value="50000000">Kolam renang (+Rp 50jt)</option>
              <option value="80000000">Basement (+Rp 80jt)</option>
              <option value="120000000">Rooftop Garden (+Rp 120jt)</option>
              <option value="200000000">Kolam + Basement (+Rp 200jt)</option>
            </select>
          </div>

          <button
            onClick={() => handleCalculate()}
            className="w-full text-[11px] font-light tracking-[0.12em] uppercase text-white bg-text border-none px-6 py-4 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            Hitung Estimasi
          </button>
        </div>

        {/* Results */}
        <div className="calc-result bg-white p-8 border border-light-border flex flex-col justify-between reveal">
          <div>
            <div className="text-[10px] font-light tracking-[0.15em] uppercase text-muted mb-2">
              Estimasi Total Biaya
            </div>
            <div className="font-serif text-5xl font-light tracking-tight text-text mb-2 leading-none">
              {hasCalculated ? formatRupiah(totalCost) : "—"}
            </div>
            <div className="text-xs font-light text-dark-muted mb-8">
              {hasCalculated
                ? `Rentang: ${formatRupiah(lowRange)} – ${formatRupiah(highRange)}`
                : "Masukkan data untuk melihat estimasi"}
            </div>
          </div>

          {hasCalculated && (
            <div className="result-breakdown block mt-auto">
              <div className="flex justify-between py-3 border-b border-light-border text-xs font-light">
                <span className="text-dark-muted">Biaya Konstruksi</span>
                <span className="text-text font-normal">{formatRupiah(constructionCost)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light-border text-xs font-light">
                <span className="text-dark-muted">Biaya Desain (8%)</span>
                <span className="text-text font-normal">{formatRupiah(designCost)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light-border text-xs font-light">
                <span className="text-dark-muted">Perizinan & IMB</span>
                <span className="text-text font-normal">{formatRupiah(permitCost)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light-border text-xs font-light">
                <span className="text-dark-muted">Fitur Tambahan</span>
                <span className="text-text font-normal">
                  {parseFloat(extras) > 0 ? formatRupiah(parseFloat(extras)) : "Tidak ada"}
                </span>
              </div>
              <div className="flex justify-between py-3.5 border-t border-text text-xs font-normal mt-1 pt-3">
                <span className="text-text">Total</span>
                <span className="text-text font-semibold">{formatRupiah(totalCost)}</span>
              </div>
              <p className="text-[10px] text-muted mt-4 leading-relaxed font-light">
                *Estimasi indikatif. Harga aktual bergantung pada kondisi tapak, spesifikasi detail, dan pasar material saat konstruksi.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
