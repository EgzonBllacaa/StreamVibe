import React from "react";
import linkedin from "../assets/linkedin-1.png";
import facebook from "../assets/facebook-1.png";
import x from "../assets/X-1.png";
import { Link } from "react-router-dom";
const FooterContent = [
  {
    title: "Home",
    links: [
      { name: "Categories", to: "/movies&shows" },
      { name: "Devices", to: "/" },
      { name: "Pricing", to: "/subscriptions" },
      { name: "FAQ", to: "/support" },
    ],
  },
  {
    title: "Movies",
    links: [
      { name: "Genres", to: "/movies&shows" },
      { name: "Trending", to: "/movies&shows" },
      { name: "New Release", to: "/movies&shows" },
      { name: "Popular", to: "/movies&shows" },
    ],
  },
  {
    title: "Shows",
    links: [
      { name: "Genres", to: "/movies&shows" },
      { name: "Trending", to: "/movies&shows" },
      { name: "New Release", to: "/movies&shows" },
      { name: "Popular", to: "/movies&shows" },
    ],
  },
  {
    title: "Support",
    links: [{ name: "Contact Us", to: "/support" }],
  },
  {
    title: "Subscription",
    links: [
      { name: "Plans", to: "/subscriptions" },
      { name: "Features", to: "/subscriptions" },
    ],
  },
  {
    title: "Connect With Us",
    imgs: [
      {
        src: facebook,
        alt: "Facebook",
      },
      {
        src: x,
        alt: "x",
      },
      {
        src: linkedin,
        alt: "linkedin",
      },
    ],
  },
];
const now = new Date();

const Footer = () => {
  return (
    <div className="flex flex-col gap-24 w-full px-4 lg:px-20 xl:px-30 2xl:px-40 py-24 bg-black-06">
      <ul className="flex gap-7 flex-wrap justify-between md:justify-start">
        {FooterContent.map((field, i) => (
          <div key={i} className="flex  flex-col gap-6 md:min-w-60">
            <span className="text-lg font-semibold cursor-pointer hover:text-gray-75 text-absolute-white">
              {field.title}
            </span>
            {field.links &&
              field.links.map((link, i) => (
                <Link
                  to={link.to}
                  key={i}
                  className="mb-0 text-lg font-medium cursor-pointer hover:text-gray-90 text-gray-60"
                >
                  {link.name}
                </Link>
              ))}
            <div className="flex gap-2">
              {field.imgs &&
                field.imgs.map((img, i) => (
                  <div key={i} className="px-2 py-1 rounded bg-absolute-white">
                    <img className="max-w-8 " src={img.src} alt={img.alt} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 justify-between pt-6 border-t-1 border-gray-60">
        <span className="hover:text-gray-90 text-gray-60">
          @{now.getFullYear()} streamvib. All Rights Reserved.
        </span>
        <div className="flex items-center">
          <span className="pr-5 hover:text-gray-90 text-gray-60 border-r-1 ">
            Terms of Use
          </span>
          <span className="pl-5 pr-5 hover:text-gray-90 text-gray-60 border-r-1 ">
            Privacy Policy
          </span>
          <span className="pl-5 hover:text-gray-90 text-gray-60 ">
            Cookie Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
