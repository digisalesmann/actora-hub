// src/app/page.tsx
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ImpactSection from '../components/ImpactSection'
import FeatureSection from '../components/FeatureSection'
import WhyActoraSection from '../components/WhyActoraSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ImpactSection />
      <FeatureSection />
      <WhyActoraSection />
      <Footer />
    </>
  )
}
