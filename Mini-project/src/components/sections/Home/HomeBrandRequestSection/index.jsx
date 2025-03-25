import React from 'react';
import style from "./style.module.scss";

const HomeBrandRequestSection = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <p className={style.title}>Testimonials</p>
            <h2 className={style.heading}>Trusted By Over 150,000 Customers Worldwide Since 2010</h2>
            <p className={style.text}>
              Elit Eget Gravida Cum Sociis Natoque Penatibus. Nisi Lacus Sed Viverra Tellus. 
              Non Blandit Massa Enim Nec Dui.
            </p>
            <div className={style.author}>
              <span className={style.name}>James</span>
              <span className={style.role}>Developer</span>
              <div className={style.line}></div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className={style.cardsWrapper}>
              <img
                className={style.bgImage}
                src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42628.jpg?v=1702459957&width=1500"
                alt="testimonial-bg"
              />
              <div className={style.card}>
                <p className={style.score}>4.5</p>
                <div className={style.stars}>★★★★★</div>
                <p className={style.rating}>6259 Rating</p>
                <p className={style.label}>Brand Request</p>
              </div>
              <div className={style.card}>
                <p className={style.score}>A+</p>
                <div className={style.stars}>★★★★★</div>
                <p className={style.rating}>6259 Rating</p>
                <p className={style.label}>Company Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrandRequestSection;
