"use client";

import { useState } from "react";

export default function BeforeAfter() {
    const [position, setPosition] = useState(50);

    return (
        <section className="py-20 px-8 md:px-20 lg:px-32 bg-off-white" id="transformation">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center max-w-xl mx-auto reveal">
                    <span className="flex items-center justify-center gap-3 text-[10px] font-light tracking-[0.2em] uppercase text-muted before:content-[''] before:inline-block before:w-[20px] before:h-[1px] before:bg-muted after:content-[''] after:inline-block after:w-[20px] after:h-[1px] after:bg-muted mb-4">
                        Transformasi
                    </span>

                    <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.15] tracking-tight text-text">
                        Sebelum dan <em className="italic font-light text-dark-muted">Sesudah</em>
                    </h2>

                    <p className="mt-4 text-xs font-light text-dark-muted leading-relaxed">
                        Saksikan bagaimana gagasan konseptual kami diwujudkan secara presisi menjadi ruang hidup yang fungsional dan berkarakter.
                    </p>
                </div>

                {/* Before / After Slider Container */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl select-none shadow-sm border border-light-border reveal delay-1">
                    {/* After Image (Base) */}
                    <img
                        src="/after.jpg"
                        alt="After"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />

                    {/* Before Image (Overlay clipped from left) */}
                    <img
                        src="/before.jpg"
                        alt="Before"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
                    />

                    {/* Slider Line Divider */}
                    <div
                        className="absolute top-0 bottom-0 w-[1px] bg-white pointer-events-none z-10"
                        style={{ left: `${position}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-text shadow-md flex items-center justify-center text-xs font-light pointer-events-none select-none">
                            ↔
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-6 left-6 bg-text/70 backdrop-blur-sm text-white text-[10px] font-light tracking-[0.15em] uppercase px-4 py-2 rounded-full pointer-events-none select-none z-10">
                        Before
                    </div>

                    <div className="absolute top-6 right-6 bg-text/70 backdrop-blur-sm text-white text-[10px] font-light tracking-[0.15em] uppercase px-4 py-2 rounded-full pointer-events-none select-none z-10">
                        After
                    </div>

                    {/* Range Slider input overlay */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={position}
                        onChange={(e) => setPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />
                </div>
            </div>
        </section>
    );
}