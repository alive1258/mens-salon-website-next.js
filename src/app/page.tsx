import type { Metadata } from "next";
import Hero from "@/src/components/sections/home/Hero";
import Marquee from "@/src/components/sections/home/Marquee";
import ServicesPreview from "@/src/components/sections/home/ServicesPreview";
import VideoSection from "@/src/components/sections/home/VideoSection";
import WhyUs from "@/src/components/sections/home/WhyUs";
import PhotoGallery from "@/src/components/sections/home/PhotoGallery";
import Testimonials from "@/src/components/sections/home/Testimonials";
import PackagesPreview from "@/src/components/sections/home/PackagesPreview";
import FaqSection from "@/src/components/sections/home/FaqSection";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <VideoSection />
      <WhyUs />
      <PhotoGallery />
      <Testimonials />
      <PackagesPreview />
      <FaqSection />
      <CtaBanner
        title="Look sharp. Book your visit today."
        description="Walk in, or book ahead to guarantee your slot. Real skill, premium products, and a lounge worth relaxing in."
      />
    </>
  );
}
