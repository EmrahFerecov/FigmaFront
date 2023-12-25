
import Aboutcontent from "../../components/Aboutcontent"
import OurService from "../../components/Delivery"
import OurPersonels from "../../components/FamousPersonel"
import OurStory from "../../components/Our Story"

function AboutPage() {
  return (
    <div>
        <OurStory/>
        <Aboutcontent/>
        <OurPersonels/>
        <OurService/>
    </div>
  )
}

export default AboutPage