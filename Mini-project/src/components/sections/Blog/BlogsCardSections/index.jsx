import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCardSkeleton from '../../../shared/Sharedskeleton';
import BlogCard from '../../../shared/BlogsCard';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const PAGE_SIZE = 6;

const BlogListSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ['blogs-cards-section', currentPage],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:1337/api/blogs-cards-sections?pagination[page]=${currentPage}&pagination[pageSize]=${PAGE_SIZE}&populate=*`
      );
      const json = await res.json();
      return json;
    },
    keepPreviousData: true,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const totalPages = data?.meta?.pagination?.pageCount || 1;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-10">
      {loading
        ? Array.from({ length: PAGE_SIZE }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))
        : data?.data?.map((el, index) => (
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
              id={el.slug}
              comments={el.comments}
            />
          ))}

      <div className="flex justify-center items-center gap-3 mt-10 w-full flex-wrap">
        {currentPage > 1 && (
          <motion.button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            whileHover={{ scale: 1.2, backgroundColor: '#ff4081' }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border transition-all shadow-md font-bold text-white flex items-center justify-center bg-gradient-to-r from-[#281db0] via-[#060046] to-[#281db0]"
          >
            <i className="ri-arrow-left-long-line"></i>
          </motion.button>
        )}

        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            whileHover={{ scale: 1.2, backgroundColor: '#ff4081' }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full border transition-all shadow-md font-bold text-white flex items-center justify-center 
              ${currentPage === i + 1 ? 'bg-gradient-to-r from-[#281db0] via-[#060046] to-[#281db0]' : 'bg-gray-300'}`}
          >
            {i + 1}
          </motion.button>
        ))}

        {currentPage < totalPages && (
          <motion.button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            whileHover={{ scale: 1.2, backgroundColor: '#ff4081' }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border transition-all shadow-md font-bold text-white flex items-center justify-center bg-gradient-to-r from-[#281db0] via-[#060046] to-[#281db0]"
          >
            <i className="ri-arrow-right-line"></i>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default BlogListSection;