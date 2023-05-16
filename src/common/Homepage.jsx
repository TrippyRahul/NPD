import React from 'react'
import MainBanner from './MainBanner'
import Cards from '../components/Cards'
import FeaturesBanner from '../components/FeaturesBanner'
import Faq from '../components/Faq'

const Homepage = () => {
  return (
   <>
   <Cards/>
   <FeaturesBanner/>
   <Faq/>
   </>
  )
}

export default Homepage