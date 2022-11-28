import React from "react";
import LandingDetails from "./LandingDetails";
import MoreDetails from "./MoreDetails";
import { FeaturesDetails } from "../../Store/data";
import { useRouter } from "next/router";

export default function ServicesInfo() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const MapData = FeaturesDetails[id];
  console.log(FeaturesDetails);
  console.log(MapData);
  return (
    <div>
      <LandingDetails MapData={MapData} />
      <MoreDetails
        title={MapData.title}
        des={MapData.details}
        youtube={MapData.youtube}
      />
    </div>
  );
}
