import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import RevenueSection from '@/components/RevenueSection';
import RewardSection from '@/components/RewardSection';
import OOTDSection from '@/components/OOTDSection';
import EarlyBirdSection from '@/components/EarlyBirdSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <RevenueSection />
      <RewardSection />
      <OOTDSection />
      <EarlyBirdSection />
      <Footer />
    </div>
  );
}