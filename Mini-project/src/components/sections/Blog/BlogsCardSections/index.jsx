import React, { useEffect, useState } from 'react'
import BlogCardSkeleton from '../../../shared/Sharedskeleton'
import BlogCard from '../../../shared/BlogsCard'
import { getAPIData } from '../../../../http/api'
import { QueryKeys } from '../../../constant/QueryKeys'
import { useQuery } from '@tanstack/react-query'

const BlogListSection = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.BLOGSCARDSSECTION],
    queryFn: () => getAPIData('blogs-cards-sections?populate=*')
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
      {loading
        ? Array.from({ length: 2 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))
        : data?.map((el, index) => (
            <BlogCard
              key={index}
              date={el.date}
              image={
                el.image?.url
                  ? `http://localhost:1337${el.image.url}`
                  : 'https://via.placeholder.com/400x300'
              }
              title={el.title}
              excerpt={el.excerpt}
              author={el.author}
              comments={el.comments}
            />
          ))}
    </div>
  )
}

export default BlogListSection
