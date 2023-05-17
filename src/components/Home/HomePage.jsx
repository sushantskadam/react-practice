import React from 'react'
import ContactUs from './ContactUs'
import FeatProp from './FeatProp'
import HomeBanner from './HomeBanner'
import MostViewed from './MostViewed'

function HomePage() {
  return (
    <div ><HomeBanner/>
    <FeatProp/>
    <MostViewed/>
    <ContactUs/>
    </div>
  )
}

export default HomePage