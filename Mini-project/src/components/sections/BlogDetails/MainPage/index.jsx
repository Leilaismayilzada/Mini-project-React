import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAPIData } from "../../../../http/api";
import { QueryKeys } from "../../../constant/QueryKeys";
import Breadcrumbs from "../../../shared/BreadCrumbs";
import styles from "./style.module.scss";
import CommentSection from "../../../shared/Comment";
import HomeHeroCharactersSection from "../../Home/HomeHeroCharactersSection";
import BlogDetailContent from "./Blogteail";

const Main = () => {
  const { id } = useParams();

  const {
    data: blogData,
    isLoading: isLoadingMain,
    error: errorMain,
  } = useQuery({
    queryKey: [QueryKeys.BLOGSCARDSSECTION, id],
    queryFn: () =>
      getAPIData(`blogs-cards-sections?populate=*&filters[slug][$eq]=${id}`),
  });


  const blog = blogData?.[0];

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
        <BlogDetailContent blog={blog} />
      </div>

   
      <CommentSection />
      <HomeHeroCharactersSection />
    </>
  );
};

export default Main;
