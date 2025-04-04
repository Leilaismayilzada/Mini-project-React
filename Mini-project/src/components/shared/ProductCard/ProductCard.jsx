import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSyncAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
import styles from "./style.module.scss";

const ProductCard = ({
  layout = 'grid-4',
  image,
  hoverImage,
  title,
  price,
  isSoldOut,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
  id
}) => {
  const isList = layout === "list";
  const navigate = useNavigate();

  return (
    <div className={`${styles.cardWrapper} ${isList ? styles.list : ""}`}>
      <div className={styles.card}>
        <div
          className={styles.imageWrapper}
          onClick={(e) => {
            e.stopPropagation(); 
            navigate(`/shop/${id}`);
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={image}
            alt={title}
            className={`${styles.image} ${styles.primaryImage}`}
          />
          <img
            src={hoverImage}
            alt={`${title} hover`}
            className={`${styles.image} ${styles.hoverImage}`}
          />

          {isSoldOut && <div className={styles.soldOut}>SOLD OUT</div>}

          <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
            <button><FaSyncAlt /></button>
            {!isSoldOut && (
              <button onClick={onAddToCart}><FaShoppingCart /></button>
            )}
            <button onClick={onToggleWishlist}>
              <FaHeart className={isInWishlist ? "text-red-500" : ""} />
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <p className={styles.price}>Rs. {price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
