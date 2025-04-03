import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAPIData } from "../../../../http/api";
import { QueryKeys } from "../../../constant/QueryKeys";
import Breadcrumbs from "../../../shared/BreadCrumbs";
import styles from "./style.module.scss";
import CommentSection from "../../../shared/Comment";
import HomeHeroCharactersSection from "../../Home/HomeHeroCharactersSection";
import AiLatestCard from '../../../shared/AiLatestCard/index';

const Main = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.BLOGSCARDSSECTION, id],
    queryFn: () =>
      getAPIData(`blogs-cards-sections?populate=*&filters[slug][$eq]=${id}`),
  });
  
  const { data: aiLatestCardData } = useQuery({
    queryKey: [QueryKeys.AILASTESTCARDS, id],
    queryFn: () =>
      getAPIData(`ai-lastest-cards?populate=*&filters[slug][$eq]=${id}`),
  });

  if (isLoading) {
    return <div className="text-center text-gray-500 text-lg">Loading...</div>; // Consider adding a spinner here
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">Error loading blog.</div>; // Could use a custom error page or icon here
  }

  const blog = data?.[0];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-9 bg-gradient-to-b from-[#0d4249] via-black to-[#3b0e49]">
        <h1 className="text-4xl font-bold text-white mb-4">News</h1>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/blogs" },
            { label: blog?.title || "Blog", href: `/blogs/${id}` },
          ]}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src={blog?.image?.url ? `http://localhost:1337${blog.image.url}` : "https://via.placeholder.com/800x400"}
            alt={blog?.title || "Blog Image"}
            className={styles.image}
          />
          <h1 className={styles.title}>{blog?.title || "Untitled Blog"}</h1>

          <div className={styles.meta}>
            <span><i className="ri-user-3-line"></i> {blog?.author || "Unknown"}</span>
            <span>•</span>
            <span><i className="ri-chat-smile-2-line"></i> {blog?.comments || 0} comments</span>
          </div>

          <p className={styles.description}>
            {blog?.description || "No description available."} 
          </p>
        </div>
      </div>

      <CommentSection />

      <HomeHeroCharactersSection />

    </>
  );
};

export default Main;
