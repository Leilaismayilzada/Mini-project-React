import React from "react";
import styles from "./style.module.scss";

const BlogDetailContent = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className={styles.card}>
      <img
        src={
          blog?.image?.url
            ? `http://localhost:1337${blog.image.url}`
            : "https://via.placeholder.com/800x400"
        }
        alt={blog?.title || "Blog Image"}
        className={styles.image}
      />
      <h1 className={styles.title}>{blog?.title}</h1>

      <div className={styles.meta}>
        <span>
          <i className="ri-user-3-line"></i> {blog?.author || "AI Blog"}
        </span>
        <span>•</span>
        <span>
          <i className="ri-calendar-2-line"></i> {blog?.date || "Unknown Date"}
        </span>
      </div>

      <p className={styles.description}>
        {blog?.description || "No description available."}
      </p>
    </div>
  );
};

export default BlogDetailContent;
