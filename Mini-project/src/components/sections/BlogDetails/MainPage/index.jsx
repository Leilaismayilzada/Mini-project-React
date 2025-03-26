import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAPIData } from "../../../../http/api";
import { QueryKeys } from "../../../constant/QueryKeys";
import Breadcrumbs from "../../../shared/BreadCrumbs";
import styles from "./style.module.scss";
import CommentSection from "../../../shared/Comment";
import HomeHeroCharactersSection from "../../Home/HomeHeroCharactersSection";

const Main = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.BLOGSCARDSSECTION, id],
    queryFn: () =>
      getAPIData(`blogs-cards-sections?populate=*&filters[slug][$eq]=${id}`),
  });

  if (isLoading)
    return <p className="text-center text-gray-500 text-lg">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 text-lg">Error loading blog.</p>;

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
            <span><i className="ri-user-3-line"></i> {blog?.author || "Unknown"}</span>
            <span>•</span>
            <span><i className="ri-chat-smile-2-line"></i> {blog?.comments || 0} comments</span>
          </div>

    

          {/* Static Extra Content (optional) */}
          <p className={styles.description}>
            Elit sed vulputate mi sit amet. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. 
            Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Tincidunt lobortis feugiat 
            vivamus at augue eget. Nibh venenatis cras sed felis eget. Quis viverra nibh cras pulvinar mattis nunc 
            sed blandit libero. Viverra accumsan in nisl nisi scelerisque eu ultric            Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Tincidunt lobortis feugiat 
            vivamus at augue eget. Nibh venenatis cras sed felis eget. Quis viverra nibh cras pulvinar mattis nunc 
            sed blandit libero. Viverra accumsan in nisl nisi scelerisque eu ultric            Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Tincidunt lobortis feugiat 
            vivamus at augue eget. Nibh venenatis cras sed felis eget. Quis viverra nibh cras pulvinar mattis nunc 
            sed blandit libero. Viverra accumsan in nisl nisi scelerisque eu ultric            Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Tincidunt lobortis feugiat 
            vivamus at augue eget. Nibh venenatis cras sed felis eget. Quis viverra nibh cras pulvinar mattis nunc 
            sed blandit libero. Viverra accumsan in nisl nisi scelerisque eu ultric            Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Tincidunt lobortis feugiat 
            vivamus at augue eget. Nibh venenatis cras sed felis eget. Quis viverra nibh cras pulvinar mattis nunc 
            sed blandit libero. Viverra accumsan in nisl nisi scelerisque eu ultrices...
          </p>
        </div>

      </div>
      <CommentSection />
      
      <HomeHeroCharactersSection/>

    </>
  );
};

export default Main;
