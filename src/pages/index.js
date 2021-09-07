import * as React from "react"
import Layout from "../components/layout";
import Seo from '../components/Seo';

// Components
import About from '../components/About';
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blogs";
import Contact from "../components/Contact";
import Home from "../components/Home";

const IndexPage = () => {
  return (
    <Layout>
      <Seo></Seo>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
    </Layout>
  )
}

export default IndexPage
