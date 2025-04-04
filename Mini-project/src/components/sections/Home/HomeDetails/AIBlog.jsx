import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAPIData } from "../../../../http/api";
import { QueryKeys } from "../../../constant/QueryKeys";
import CommentSection from "../../../shared/Comment";
import HomeHeroCharactersSection from "../HomeHeroCharactersSection";
import styles from "./style.module.scss";
import BlogDetailContent from "../../BlogDetails/MainPage/Blogteail";
import Breadcrumbs from "../../../shared/BreadCrumbs";

const AiBlogDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.AILASTESTCARDS, id],
    queryFn: () =>
      getAPIData(`ai-lastest-cards?populate=*&filters[slug][$eq]=${id}`),
  });

  const blog = data?.[0];

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading blog</p>;

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-9 bg-gradient-to-b from-[#0d4249] via-black to-[#3b0e49]">
      <h1 className="text-4xl font-bold text-white mb-4">{blog?.title}</h1>
      <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "AI News", href: "/blogs" },
            { label: blog?.title || "Blog", href: `/home/${id}` },
          ]}
        />
      </div>

      <div className={styles.container}>
        <BlogDetailContent blog={blog} />
      </div>

      <CommentSection />
      <HomeHeroCharactersSection />
    </>
  );
};

export default AiBlogDetailPage;
