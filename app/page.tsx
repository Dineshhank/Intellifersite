import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhoWeAre from "@/components/who-we-are";
import CaseStudies from "@/components/case-studies";
import NumbersSection from "@/components/numbers-section";
import ServicesSection from "@/components/services-section";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import FooterLayout from "@/components/footer-layout";

export default function Page() {
  return (
    <FooterLayout footer={<Footer />}>
      <main className="bg-[#F9F6F2]">
        <Navbar />
        <HeroSection />
        <WhoWeAre />
        <div className="bg-[#111827]">
          <NumbersSection />
          <CaseStudies />
        </div>
        <ServicesSection />
        <Testimonials />
      </main>
    </FooterLayout>
  );
}
