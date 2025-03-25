import React from 'react'

const BlogCardSkeleton = () => {
  return (
    <div className="text-white rounded-xl overflow-hidden shadow-md animate-pulse transition-all duration-300">
      <div className="w-full h-[400px] bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800" />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
          <div className="h-3 w-20 bg-gray-600 rounded" />
          <span className="text-gray-500">•</span>
          <div className="h-3 w-20 bg-gray-600 rounded" />
          <span className="text-gray-500">•</span>
          <div className="h-3 w-20 bg-gray-600 rounded" />
        </div>
        <div className="h-6 w-3/4 bg-gray-500 rounded mb-2" />
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gray-600 rounded" />
          <div className="h-4 w-[90%] bg-gray-600 rounded" />
          <div className="h-4 w-[85%] bg-gray-600 rounded" />
        </div>
        <div className="h-10 w-28 bg-gray-700 rounded-full" />
      </div>
    </div>
  )
}

export default BlogCardSkeleton
