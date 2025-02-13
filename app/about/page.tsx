import { LogosSection } from "@/components/Home/Sections/logo-cloud-section";
import HeroSection from "@/components/AboutUs/Sections/hero-section";
import AboutUsSection from "@/components/AboutUs/Sections/aboutUs-section";
import TeamSection from "@/components/AboutUs/Sections/team-section";
import { CTASection } from "@/components/Home/Sections/call-to-action-section";


export default function AboutUsPage() {
  return (
    <main className="w-full m-auto max-w-7xl pb-20">
      <HeroSection />
      <AboutUsSection />
      <TeamSection />
      <LogosSection />
      <CTASection/>
    </main>
  )
}

