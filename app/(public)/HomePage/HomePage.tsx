import React from 'react'
import TrustedSection from './TrustedSection'
import { FeaturedProducts } from './FeaturedProducts'
import { Hero } from './HeroSection'
import { WhyRiset } from './WhyRiset'
import { IndustriesSection } from './IndustriesSection'
import { Stats } from './StatsSection'

export default function HomePage() {
  return (
    <div>
      <Hero/>
      <TrustedSection/>
      <FeaturedProducts/>
      <WhyRiset/>
      <IndustriesSection/>
      <Stats/>
    </div>
  )
}
