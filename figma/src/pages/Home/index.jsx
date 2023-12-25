import React from 'react'
import Categories from '../../components/Categories'
import Browse from '../../components/BrowseByCategories'
import BestSellingProducts from '../../components/BestSelling'
import EnhanceYourMusicExperience from '../../components/EnhanceMusic'
import Arrival from '../../components/Arrivals'
import OurService from '../../components/Delivery'

function Home() {
  return (
    <div>
        <Categories/>
        <Browse/>
        <BestSellingProducts/>
        <EnhanceYourMusicExperience/>
        <Arrival/>
        <OurService/>
    </div>
  )
}

export default Home