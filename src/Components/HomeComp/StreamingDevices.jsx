import React from "react";
import Laptop from "../../assets/Laptop.png";
import SmartPhone from "../../assets/Smartphone.png";
import Console from "../../assets/Console.png";
import Tv from "../../assets/Tv.png";
import VirtualReality from "../../assets/VirtualReality.png";
import Tablet from "../../assets/Tablet.png";
import TitleHeader from "../TitleHeader";

const DEVICES = [
  {
    id: 1,
    img: SmartPhone,
    device: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 2,
    img: Tablet,
    device: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 3,
    img: Tv,
    device: "Smart TV",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 4,
    img: Laptop,
    device: "Laptop",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 5,
    img: Console,
    device: "Gaming Console",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 6,
    img: VirtualReality,
    device: "Vr Headsets",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

const StreamingDevices = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="w-5/6 text-center sm:text-left">
        <TitleHeader
          title={"We Provide you streaming experience across various devices."}
          description={
            "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
          }
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7 ">
        {DEVICES.map((device) => (
          <div
            key={device.id}
            className="flex flex-col p-12 min-w-3/12  max-w-[450px]  border-1 border-black-15 rounded-xl gap-7 "
          >
            <div className="flex items-center gap-4">
              <img
                className="p-4 min-w-10 bg-black-06 border-1 rounded-xl border-black-12"
                src={device.img}
                alt={device.device}
              />
              <h4 className="text-2xl font-medium text-absolute-white">
                {device.device}
              </h4>
            </div>
            <h4 className="text-gray-60">{device.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamingDevices;
