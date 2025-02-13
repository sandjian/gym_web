import { CTASection } from "@/components/Home/Sections/call-to-action-section";
import { PricingSection } from "@/components/Home/Sections/price-section";
import ScheduleSection from "@/components/Schedules/Sections/schedules-section";

export default function SchedulesPage() {
  return (
    <main className="w-full h-full">
      <ScheduleSection/>
      <PricingSection/>
      <CTASection/>
    </main>
  );
}