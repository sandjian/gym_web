"use client";

import { CTASection } from "@/components/Home/Sections/call-to-action-section";
import { ContactSection } from "@/components/Home/Sections/contact-section";
import { FeaturesSection } from "@/components/Home/Sections/features-section";
import { GallerySection } from "@/components/Home/Sections/gallery";
import HeroSection from "@/components/Home/Sections/hero-section";
import { LogosSection } from "@/components/Home/Sections/logo-cloud-section";
import { PricingSection } from "@/components/Home/Sections/price-section";
import { TestimonalsSection } from "@/components/Home/Sections/testimonials-section";
import { motion } from "framer-motion";

export default function Home() {
    const sections = [
        HeroSection,
        FeaturesSection,
        TestimonalsSection,
        PricingSection,
        LogosSection,
        CTASection,
        GallerySection,
        ContactSection,
    ];

    return (
        <main className="w-full h-full">
            {sections.map((Section, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.1,
                        ease: "easeInOut",
                        delay: index * 0.1, 
                    }}
                >
                    <Section />
                </motion.div>
            ))}
        </main>
    );
}