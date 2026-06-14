"use client";

import React from "react";

const clients = [
    {
        name: "BTR",
        render: (
            <img
                src="/btr.png"
                alt="BTR Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
    {
        name: "PAKUWON",
        render: (
            <img
                src="/pakuwon.png"
                alt="PAKUWON Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
    {
        name: "SUMREC",
        render: (
            <img
                src="/sumrec.png"
                alt="SUMREC Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
    {
        name: "THIRD",
        render: (
            <img
                src="/third.png"
                alt="THIRD Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
    {
        name: "VICTIM",
        render: (
            <img
                src="/victim.png"
                alt="VICTIM Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
    {
        name: "BTR",
        render: (
            <img
                src="/btr.png"
                alt="BTR Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
    {
        name: "BTR",
        render: (
            <img
                src="/btr.png"
                alt="BTR Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
    {
        name: "BTR",
        render: (
            <img
                src="/btr.png"
                alt="BTR Logo"
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
        ),
    },
];

// Duplikat agar efek loop seamless
const doubled = [...clients, ...clients];

export default function Client() {
    return (
        <div className="w-full border-t border-light-border pt-10 mt-16">
            {/* Label */}
            <p className="text-center text-[9px] font-light tracking-[0.25em] uppercase text-muted mb-10">
                Dipercaya oleh
            </p>

            {/* Marquee wrapper — overflow hidden + fade edges */}
            <div
                className="relative overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                }}
            >
                {/* Track — contains 2× the list for seamless looping */}
                <div className="marquee-track flex items-center w-max gap-16 px-8">
                    {doubled.map((client, i) => (
                        <React.Fragment key={i}>
                            <div className="flex items-center justify-center h-8 transition-transform duration-300">
                                {client.render}
                            </div>
                            {/* Dot separator */}
                            <span className="text-muted/30 text-[8px] select-none">◆</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
