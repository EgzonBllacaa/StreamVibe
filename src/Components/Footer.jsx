import React from "react";
import linkedin from "../assets/linkedin-1.png";
import facebook from "../assets/facebook-1.png";
import x from "../assets/x-1.png";
const FooterContent = [
  {
    title: "Home",
    links: ["Categories", "Devices", "Pricing", "FAQ"],
  },
  {
    title: "Movies",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    title: "Shows",
    links: ["Gernes", "Trending", "New Release", "Popular"],
  },
  {
    title: "Support",
    links: ["Contact Us"],
  },
  {
    title: "Subscription",
    links: ["Plans", "Features"],
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
    <div className="flex flex-col gap-24 px-40 py-24 bg-black-06">
      <ul className="flex gap-7">
        {FooterContent.map((field, i) => (
          <div key={i} className="flex flex-col gap-6 md:min-w-60">
            <span className="text-lg font-semibold cursor-pointer hover:text-gray-75 text-absolute-white">
              {field.title}
            </span>
            {field.links &&
              field.links.map((link, i) => (
                <div key={i}>
                  <li className="mb-0 text-lg font-medium cursor-pointer hover:text-gray-90 text-gray-60">
                    {link}
                  </li>
                </div>
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
      <div className="flex justify-between pt-6 border-t-1 border-gray-60">
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
