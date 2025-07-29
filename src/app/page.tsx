import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import HowItWorks from '@/components/HowItWorks';
import RevenueFlow from '@/components/RevenueFlow';
import PreRegistration from '@/components/PreRegistration';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <RevenueFlow />
      <PreRegistration />
      <Footer />
    </div>
  );
}