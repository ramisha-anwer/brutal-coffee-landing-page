import React from 'react'
import { FaqWithBg } from '../components/Faqwithbg'
import { FeaturesCards } from '../components/FeaturesCards'
import { FooterLinks } from '../components/Footer'
import { HeaderSimple } from '../components/Header'
import { HeroTitle } from '../components/HeroSection'
import HowItworks from '../components/HowItworks'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landing-container'>
    <HeaderSimple/>
    <HeroTitle/>
    <FeaturesCards/>
    <HowItworks/>
    <FaqWithBg/>
    <FooterLinks/>
    </div>
  )
}

export default LandingPage