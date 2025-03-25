import React from 'react'
import BlogsBreadCrumbsSection from '../../components/sections/Blog/BlogsBreadCrumbSEction'
import BlogListSection from '../../components/sections/Blog/BlogsCardSections'

const BlogsPage = () => {

  return (
    <div className="text-white">
      <BlogsBreadCrumbsSection />

   <BlogListSection/>
   
    </div>
  )
}

export default BlogsPage
