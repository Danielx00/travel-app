import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import Stats from "../components/Stats"
import EmailSection from "../components/EmailSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Trips heading="Our Favorite Destinations"/>
    <Testimonials/>
    <Stats/>
    <EmailSection/>
    
  </Layout>
)

export default IndexPage
