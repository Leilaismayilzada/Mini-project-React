import React from 'react'
import HomeSliderSection from '../../components/sections/Home/HomeSliderSection/HomeSliderSection'
import RotateSlider from '../../components/sections/Home/HomeRotateSlider'
import HomeImageGallery from '../../components/sections/Home/HomeImageGalerry'
import HomeBrandRequestSection from '../../components/sections/Home/HomeBrandRequestSection'
import HomePaymentDetailsSection from '../../components/sections/Home/HomePaymentDetailsSection'
import HeroVideo from '../../components/sections/Home/HomeVideoSection'
import HomeAiLatestBlogSection from '../../components/sections/Home/HomeAiLatestBlogSection'
import HomeHeroCharactersSection from '../../components/sections/Home/HomeHeroCharactersSection'


const HomePage = () => {
  return (
    <div>
      <HomeSliderSection/>
      <RotateSlider/>
      <HomeImageGallery/>
      <HomeBrandRequestSection/>
      <HomePaymentDetailsSection/>
      <HeroVideo/>
      <HomeAiLatestBlogSection/>
      <HomeHeroCharactersSection/>
    </div>
  )
}

export default HomePage
