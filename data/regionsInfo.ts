import { RegionType } from "@/types/types";

export const regionsInfo: RegionType = {
  id: 1,
  generalInfo: {
    title: "Golden Circle Region",
    description:
      "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
    tags: ["Geysers", "Waterfalls", "Crater lakes"],
  },
  regionalHighlights: [
    {
      id: 100,
      title: "Gullfoss Waterfall",
      description: "Waterfall",
      estimation: "1h",
      isBookmarked: false,
      isCuratorsPick: true,
      image: require("@/public/images/geysir.png"),
    },
    {
      id: 101,
      title: "Reykjadalur Valley",
      description: "Iconic hike, hot springs",
      estimation: "1h",
      isBookmarked: false,
      isCuratorsPick: true,
      image: require("@/public/images/reykjad.png"),
    },
    {
      id: 102,
      title: "Geysir Thermal Field",
      description: "Geysers",
      estimation: "1h",
      isBookmarked: false,
      isCuratorsPick: true,
      image: require("@/public/images/geysir.png"),
    },
  ],
  whereToStay: [
    {
      id: 200,
      title: "Frost and Fire Hotel",
      description: "Boutique hotel",
      estimation: "$180+",
      isBookmarked: false,
      isCuratorsPick: true,
      image: require("@/public/images/frost.png"),
      rating: "9.1/10",
    },
    {
      id: 201,
      title: "The Greenhouse Hotel",
      description: "Luxury hotel",
      estimation: "$230+",
      isBookmarked: true,
      isCuratorsPick: true,
      image: require("@/public/images/green.png"),
      rating: "9.1/10",
    },
    {
      id: 202,
      title: "INNI",
      description: "Apart hotel",
      estimation: "$130+",
      isBookmarked: true,
      isCuratorsPick: true,
      image: require("@/public/images/inni.png"),
      rating: "9.1/10",
    },
  ],
};
