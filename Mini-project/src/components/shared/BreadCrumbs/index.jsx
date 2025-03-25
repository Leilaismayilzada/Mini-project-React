import React from 'react'

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center  space-x-2 text-md text-white">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <a href={item.href} className="hover:underline text-white/70">{item.label}</a>
                  <span className="mx-1 text-white">›</span>
                </>
              ) : (
                <span className="text-white font-semibold" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
