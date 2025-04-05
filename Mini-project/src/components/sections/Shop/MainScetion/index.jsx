import React, { useEffect, useState } from 'react';
import ProductCard from '../../../shared/ProductCard/ProductCard';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constant/QueryKeys';
import { getAPIData } from '../../../../http/api';
import BlogCardSkeleton from '../../../shared/Sharedskeleton';
import { useOutletContext, useNavigate } from 'react-router-dom';
import GradientButton from '../../../shared/ButtonGradient';

const MainSection = () => {
  const [layout, setLayout] = useState('grid-4');
  const [sortType, setSortType] = useState('az');
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [categoryOpen, setCategoryOpen] = useState(false);

  const PAGE_SIZE = 8;
  const navigate = useNavigate();
  const { cartItems, setCartItems, setCartOpen } = useOutletContext();

  const { data: categories } = useQuery({
    queryKey: [QueryKeys.CATEGORY],
    queryFn: () => getAPIData('categories'),
  });

  const categoryId = categories?.find(cat => cat.title === category)?.id;

  const { data } = useQuery({
    queryKey: [QueryKeys.PRODUCTSTOTAL, categoryId, minPrice, maxPrice],
    enabled: category === '' || !!categoryId,
    queryFn: () => {
      const base = 'product-totals?populate=*';
      let filters = [];

      if (categoryId && category !== '') {
        filters.push(`filters[category][id][$eq]=${categoryId}`);
      }
      if (minPrice) {
        filters.push(`filters[price][$gte]=${minPrice}`);
      }
      if (maxPrice) {
        filters.push(`filters[price][$lte]=${maxPrice}`);
      }

      const fullUrl = `${base}&${filters.join('&')}`;
      return getAPIData(fullUrl);
    },
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, [setCartItems]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const layoutClass = {
    list: 'grid-cols-1',
    'grid-2': 'sm:grid-cols-1 md:grid-cols-2',
    'grid-3': 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'grid-4': 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }[layout];

  const handleAddToCart = (product) => {
    if (product.isSoldOut) return;
    const existingIndex = cartItems.findIndex(item => item.title === product.title);
    let updatedCart;
    if (existingIndex !== -1) {
      updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartOpen(true);
  };

  const handleToggleWishlist = (product) => {
    const currentWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const exists = currentWishlist.find(item => item.title === product.title);
    if (exists) {
      navigate('/wishlist');
    } else {
      const updatedWishlist = [...currentWishlist, product];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
      setWishlistItems(updatedWishlist);
    }
  };

  const sortedData = data ? [...data] : [];

  if (sortType === 'az') {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === 'za') {
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortType === 'priceLow') {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortType === 'priceHigh') {
    sortedData.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="px-3 py-6 md:px-4 md:py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3 order-1 md:order-2">
          <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-600 pb-2">Filter:</h3>

          <div className="mb-8 p-4 rounded-xl bg-[#111217] text-white shadow-md">
            <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Price</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 w-16">Min</span>
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="0" className="bg-[#1a1b1e] px-3 py-2 rounded-lg text-white w-full max-w-[120px]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 w-16">Max</span>
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="620" className="bg-[#1a1b1e] px-3 py-2 rounded-lg text-white w-full max-w-[120px]" />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#111217] text-white shadow-md">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setCategoryOpen(prev => !prev)}>
              <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">Category</h4>
              <span className="text-xl">{categoryOpen ? '▲' : '▼'}</span>
            </div>
            <AnimatePresence>
              {categoryOpen && (
                <motion.ul key="categoryList" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-2 mt-4 overflow-hidden">
                  <li className={`text-sm cursor-pointer px-4 py-2 rounded-xl ${category === '' ? 'bg-purple-700' : 'hover:bg-gray-700'}`} onClick={() => setCategory('')}>All</li>
                  {categories?.map((el, index) => (
                    <li key={index} className={`text-sm cursor-pointer px-4 py-2 rounded-xl ${category === el.title ? 'bg-purple-700' : 'hover:bg-gray-700'}`} onClick={() => setCategory(el.title)}>{el.title}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div className="text-white mt-6 bg-[#111217] p-4 md:p-6 rounded-2xl shadow-md w-full text-center space-y-4">
            <h2 className="text-2xl font-semibold">🔥 Trending</h2>
            <div className="rounded-xl overflow-hidden">
              <img src="https://evoluxia-theme.myshopify.com/cdn/shop/files/2_750x.jpg?v=1706687650" alt="Trending product" className="w-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <GradientButton>Shop Now</GradientButton>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 order-2 md:order-1">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-white text-lg">Showing 1–{sortedData.length || 0} of {sortedData.length || 0} Results</p>
            <div className="flex gap-2">
              {['list', 'grid-2', 'grid-3', 'grid-4'].map((view) => (
                <button key={view} onClick={() => setLayout(view)} className={`p-2 rounded text-white ${layout === view ? '' : 'bg-gray-700'}`} style={layout === view ? { background: 'linear-gradient(90deg, rgba(40,29,176,1), rgba(6,0,70,1) 50%, rgba(40,29,176,1) 100%)' } : {}}>
                  {view === 'list' ? '≡' : '▮'.repeat(Number(view.split('-')[1] || 1))}
                </button>
              ))}
            </div>
            <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="border border-white px-4 py-2 rounded-full bg-transparent text-white">
              <option value="az">Alphabetically, A–Z</option>
              <option value="za">Alphabetically, Z–A</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={layout} className={`grid ${layoutClass} gap-6`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {loading
                ? Array.from({ length: PAGE_SIZE }).map((_, index) => (
                    <BlogCardSkeleton key={index} />
                  ))
                : sortedData.map((el, index) => (
                    <ProductCard
                      key={index}
                      layout={layout}
                      title={el.title}
                      id={el.slug}
                      price={el.price}
                      isSoldOut={el.isSoldOut}
                      image={el.image?.url ? `http://localhost:1337${el.image.url}` : 'https://via.placeholder.com/150'}
                      hoverImage={el.image?.url ? `http://localhost:1337${el.image.url}` : 'https://via.placeholder.com/150'}
                      onAddToCart={() =>
                        handleAddToCart({
                          title: el.title,
                          price: el.price,
                          isSoldOut: el.isSoldOut,
                          image: el.image?.url ? `http://localhost:1337${el.image.url}` : 'https://via.placeholder.com/150',
                        })
                      }
                      onToggleWishlist={() =>
                        handleToggleWishlist({
                          title: el.title,
                          price: el.price,
                          image: el.image?.url ? `http://localhost:1337${el.image.url}` : 'https://via.placeholder.com/150',
                        })
                      }
                      isInWishlist={wishlistItems.some(item => item.title === el.title)}
                    />
                  ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
