import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import GradientButton from "../ButtonGradient";

const CommentSection = () => {
  const [newComments, setNewComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Load comments from localStorage when component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("blog-comments");
    if (storedComments) {
      setNewComments(JSON.parse(storedComments));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      ...formData,
      date: new Date().toISOString(),
    };

    const updatedComments = [...newComments, newComment];
    setNewComments(updatedComments);
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments));

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.commentWrapper}>
        <h2 className={styles.sectionTitle}>
          {newComments.length} Comment{newComments.length !== 1 && "s"}
        </h2>
  
        <div className={styles.commentList}>
          {newComments.map((comment, idx) => (
            <div key={idx} className={styles.commentBox}>
              <p>{comment.message}</p>
              <div className={styles.commentMeta}>
                <span>{comment.name}</span> |{" "}
                <span>{new Date(comment.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
  
        <h3 className={styles.replyTitle}>Leave A Reply</h3>
        <form className={styles.commentForm} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <input
              type="text"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Your message *"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
      
          <GradientButton type="submit" >
          Submit Now
          </GradientButton>
        </form>
      </div>
    </div>
  );
  
};

export default CommentSection;
