import React from 'react'
import BlogsBreadCrumbsSection from '../../components/sections/Blog/BlogsBreadCrumbSEction'
import BlogListSection from '../../components/sections/Blog/BlogsCardSections'
import HomeHeroCharactersSection from '../../components/sections/Home/HomeHeroCharactersSection'

const BlogsPage = () => {

  return (
    <div className="text-white">
      <BlogsBreadCrumbsSection />
   <BlogListSection/>
   <HomeHeroCharactersSection/>
    </div>
  )
}

export default BlogsPage
