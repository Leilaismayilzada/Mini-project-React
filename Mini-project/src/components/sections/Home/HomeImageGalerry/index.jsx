import React from "react";
import style from "./style.module.scss";
import GradientButton from "../../../shared/ButtonGradient";
import { Link } from "react-router-dom";

const HomeImageGallery = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.wrapper1}>
          <img
            src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42622.jpg?v=1702442630"
            alt="Mountain"
            className={style.mountain}
          />
          <img
            src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42621.png?v=1702455747"
            alt="Girly"
            className={style.girly}
          />
        </div>
        <div className={style.wrapper3}>
          {" "}
          <img
            src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42623.jpg?v=1702442630"
            alt="Owl"
            className={style.owl}
          />
        </div>
        <div className={style.wrapper2}>
          {" "}
          <img
            src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42624.jpg?v=1702442742"
            alt="Guy"
            className={style.guy}
          />
          <img
            src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42625.jpg?v=1702442630"
            alt="Robot"
            className={style.robots}
          />
        </div>

        <div className={style.content}>
          <h2>AI Image Gallery</h2>
          <p>
            Nec ultrices dui sapien eget mi proin sed libero enim. Nibh cras
            pulvinar mattis nunc sed blandit libero. Congue eu consequat ac
            felis donec et odio pellentesque.
          </p>
          <Link to="/shop">
  <GradientButton>Shop Now</GradientButton>
</Link>        </div>
      </div>
    </div>
  );
};

export default HomeImageGallery;
