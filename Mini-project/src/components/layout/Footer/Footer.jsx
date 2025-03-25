import React, { useState } from "react";
import styles from "./style.module.scss";

const Footer = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  const menuItems = [
    {
      title: "Pages",
      open: isPagesOpen,
      toggle: () => setIsPagesOpen(!isPagesOpen),
      links: [
        { label: "Home", href: "#home" },
        { label: "Shop", href: "#shop" },
        { label: "Our Story", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Faq", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Information",
      open: isInformationOpen,
      toggle: () => setIsInformationOpen(!isInformationOpen),
      links: [
        { label: "Watch Walkthrough", href: "#walkthrough" },
        { label: "Request A Demo", href: "#demo" },
        { label: "Customer Reviews", href: "#reviews" },
        { label: "The AI-E Blog", href: "#blog" },
        { label: "Expert Videos", href: "#videos" },
      ],
    },
    {
      title: "Contact Us",
      open: isContactUsOpen,
      toggle: () => setIsContactUsOpen(!isContactUsOpen),
      custom: (
        <ul className="space-y-2 leading-loose">
          <li><span className="text-sm">Have Questions Or Suggestions?</span></li>
          <li><a href="mailto:info@example.com" className="hover:text-[#99DA93]">Info@Example.Com</a></li>
          <li><span className="text-sm">Need Assistance? Give Us A Call.</span></li>
          <li><span className="text-sm">000 - 123 - 456789</span></li>
        </ul>
      )
    },
    {
      title: "We’re here for you",
      open: isHoursOpen,
      toggle: () => setIsHoursOpen(!isHoursOpen),
      custom: (
        <ul className="space-y-2 leading-loose">
          <li><span className="text-sm">Monday - Thursday: 9:30 - 18:00</span></li>
          <li><span className="text-sm">Friday: 9:30 - 15:00</span></li>
        </ul>
      )
    }
  ];

  return (
    <footer className="bg-[#02070f] text-white py-12">
      <div className={styles.container}>
        <div className="hidden md:grid grid-cols-4 gap-10">
          <div>
            <img
              src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Evoluxia_Logo.png?v=1702471466&width=300"
              alt="Evoluxia Logo"
              className="mb-4"
            />
            <p className="text-sm">
              Pellentesque habitant morbi tristique senectus et eu consequat ac.
            </p>
          </div>

          {menuItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-4 text-[#99DA93]">
                {item.title}
              </h3>
              {item.links ? (
                <ul className="space-y-2 leading-loose">
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="hover:text-[#99DA93]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                item.custom
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden space-y-6">
          <div>
            <img
              src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Evoluxia_Logo.png?v=1702471466&width=300"
              alt="Evoluxia Logo"
              className="mb-4"
            />
            <p className="text-sm">
              Pellentesque habitant morbi tristique senectus et eu consequat ac.
            </p>
          </div>

          {menuItems.map((item, index) => (
            <div key={index}>
              <h3
                className="text-2xl font-semibold mb-4 text-[#99DA93] cursor-pointer flex justify-between items-center"
                onClick={item.toggle}
              >
                {item.title}
                <span className="text-lg">{item.open ? "-" : "+"}</span>
              </h3>
              {item.open &&
                (item.links ? (
                  <ul className="space-y-2 leading-loose">
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="hover:text-[#99DA93]">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  item.custom
                ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://twitter.com"
            className="border rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-blue-500"
          >
            <i className="ri-twitter-line"></i>
          </a>
          <a
            href="https://facebook.com"
            className="border rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-blue-500"
          >
            <i className="ri-facebook-line"></i>
          </a>
          <a
            href="https://instagram.com"
            className="border rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-pink-500"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://youtube.com"
            className="border rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-red-500"
          >
            <i className="ri-youtube-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
