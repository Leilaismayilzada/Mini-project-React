import React from 'react'
import GradientButton from '../ButtonGradient'

const BlogCard = ({ image, date, author, comments, title, excerpt }) => {
  return (
    <div className=" text-white rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-[400px] object-cover" />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/70 mb-3">
          <span className="flex items-center gap-1">
            <i className="ri-calendar-todo-line"></i> {date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <i className="ri-user-3-line"></i> {author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <i className="ri-chat-smile-2-line"></i> {comments}
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        <p className="text-white/80 text-[15px] leading-relaxed mb-4">{excerpt}</p>

        <GradientButton>Read More</GradientButton>
      </div>
    </div>
  )
}

export default BlogCard
