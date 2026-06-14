"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxText() {
    const text =
        "Kami merancang ruang yang menyeimbangkan estetika fungsi dan keberlanjutan.";

    const words = text.split(" ");

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.65", "start 0"],
    });

    return (
        <section
            ref={container}
            className="max-w-4xl mx-auto py-30 px-6"
        >
            <p className="font-serif text-4xl md:text-6xl leading-tight font-light flex flex-wrap gap-x-3">
                {words.map((word, index) => {
                    const start = index / words.length;
                    const end = start + 1 / words.length;

                    return (
                        <Word
                            key={index}
                            progress={scrollYProgress}
                            range={[start, end]}
                        >
                            {word}
                        </Word>
                    );
                })}
            </p>
        </section>
    );
}

function Word({
    children,
    progress,
    range,
}: {
    children: string;
    progress: any;
    range: number[];
}) {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="relative">
            <span className="absolute opacity-10">
                {children}
            </span>

            <motion.span
                style={{ opacity }}
                className="relative text-black"
            >
                {children}
            </motion.span>
        </span>
    );
}