import Header from '../components/Header'
import Hero from '../components/Hero'
import FAQSection from '../components/FAQSection'
import FeaturedInsights from '../components/FeaturedInsights'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="content-wrapper">
        <FeaturedInsights />
        <FAQSection />
        <ServicesSection />
        <StatsSection />
        <CaseStudiesSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}

export default Home

