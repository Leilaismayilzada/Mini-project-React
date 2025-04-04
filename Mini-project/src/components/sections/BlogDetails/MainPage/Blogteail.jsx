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
      Proin nibh nisl condimentum id venenatis a condimentum vitae. Posuere ac ut consequat semper viverra nam. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Cursus risus at ultrices mi tempus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Ut tristique et egestas quis. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Ultricies tristique nulla aliquet enim tortor at auctor urna. Amet purus gravida quis blandit turpis. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nec sagittis aliquam malesuada bibendum arcu vitae. Eget velit aliquet sagittis id consectetur. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Aliquet risus feugiat in ante metus. Nullam non nisi est sit amet facilisis magna etiam.
<br />
<br />
Vitae tortor condimentum lacinia quis vel eros donec ac odio. Nisl nunc mi ipsum faucibus. Proin gravida hendrerit lectus a. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Molestie a iaculis at erat pellentesque adipiscing commodo. Commodo odio aenean sed adipiscing diam donec adipiscing. Dictum at tempor commodo ullamcorper. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Consequat id porta nibh venenatis cras sed. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Id semper risus in hendrerit gravida rutrum quisque non. Eget velit aliquet sagittis id. Ut sem viverra aliquet eget. Velit scelerisque in dictum non consectetur.
      </p>
    </div>
  );
};

export default BlogDetailContent;
