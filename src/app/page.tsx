"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Client from "@/components/Client";
import Text from "@/components/Text";
import Services from "@/components/Services";
import Porto from "@/components/Porto";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Mark body as JS-ready so reveal system activates
    document.body.classList.add("js-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    // Function to find and observe unobserved reveal elements
    const observeNewElements = () => {
      const revealElements = document.querySelectorAll(".reveal:not(.visible)");
      revealElements.forEach((el) => {
        // Immediately show elements that are already in the viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("visible");
        } else {
          revealObserver.observe(el);
        }
      });
    };

    // Run once initially
    observeNewElements();

    // Setup MutationObserver to watch for newly rendered .reveal components
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Client />
      <Text />
      <Services />
      <Porto />
      <Projects />
      <Process />
      <Calculator />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
