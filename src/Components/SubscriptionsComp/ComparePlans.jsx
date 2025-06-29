import React from "react";
import TitleHeader from "../TitleHeader";
import Plans from "./Plans";
const plansArray = [
  {
    Features: "Features",
    Price: "Price",
    Content: "Content",
    Devices: "Devices",
    FreeTrial: "Free Trial",
    CancelAntime: "Cancel Anytime",
    HDR: "HDR",
    DolbyAtmos: "Dolby Atmos",
    AdFREE: "AddFree",
    OfflineViewing: "Offline viewing",
    FamilySharing: "Family Sharing",
  },
  {
    Features: "Basic",
    Price: "$9.99/Month",
    Content:
      "Access to a wide selection of movies and shows, including some new releases.",
    Devices: "Watch on one device simultaneously",
    FreeTrial: "7 Days",
    CancelAntime: "7 Days",
    HDR: "No",
    DolbyAtmos: "No",
    AdFREE: "No",
    OfflineViewing: "No",
    FamilySharing: "No",
  },
  {
    Features: "Standard",
    Price: "$12.99/Month",
    Content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    Devices: "Watch on Two device simultaneously",
    FreeTrial: "7 Days",
    CancelAntime: "Yes",
    HDR: "Yes",
    DolbyAtmos: "Yes",
    AdFREE: "Yes",
    OfflineViewing: "Yes, for select titles.",
    FamilySharing: "Yes, up to 5 family members.",
  },
  {
    Features: "Premium",
    Price: "$14.99/Month",
    Content:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    Devices: "Watch on Four device simultaneously",
    FreeTrial: "7 Days",
    CancelAntime: "Yes",
    HDR: "Yes",
    DolbyAtmos: " Yes",
    AdFREE: "Yes",
    OfflineViewing: "Yes, for all titles.",
    FamilySharing: "Yes, up to 6 family members.",
  },
];

const ComparePlans = () => {
  return (
    <div className="flex flex-col gap-20">
      <TitleHeader
        title={"Compare our plans and ind the right one for you"}
        description={
          "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
        }
      />
      <Plans plansArray={plansArray} />
    </div>
  );
};

export default ComparePlans;
