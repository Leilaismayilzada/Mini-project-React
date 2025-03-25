import React from 'react'
import Breadcrumbs from '../../../shared/BreadCrumbs'

const BlogsBreadCrumbsSection = () => {
  return (
<div className="flex flex-col items-center  justify-center text-center p-9 bg-gradient-to-b from-[rgb(13,66,73)] via-[rgb(0,0,0)] to-[rgb(59,14,73)]">
<div className="text-3xl font-bold p-5 ">News</div>
      <Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'News', href: '/blogs' },
]} />

    </div>
  )
}

export default BlogsBreadCrumbsSection
