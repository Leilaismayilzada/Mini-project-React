import React from 'react'
import Breadcrumbs from '../../../shared/BreadCrumbs'

const TopPartSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center  justify-center text-center p-9 bg-gradient-to-b from-[rgb(13,66,73)] via-[rgb(0,0,0)] to-[rgb(59,14,73)]">
<div className="text-5xl font-bold p-5 text-amber-50 ">Products</div>
      <Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/shop' },
]} />

    </div>
    </div>
  )
}

export default TopPartSection
