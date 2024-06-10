import { DailyPlayType } from "@/types/types";

export const dailyPlans: DailyPlayType[] = [
  {
    id: 1,
    title: "Day 1",
    estimatedTime: "40m",
    plan: [
      {
        id: 300,
        title: "Gullfoss Waterfall",
        description: "Waterfall",
        estimation: "1h",
        isBookmarked: false,
        isCuratorsPick: true,
        image: require("@/public/images/skogafoss.webp"),
      },
      {
        id: 301,
        title: "Reykjadalur Valley",
        description: "Iconic hike, hot springs",
        estimation: "1h",
        isBookmarked: false,
        isCuratorsPick: true,
        image: require("@/public/images/img5.webp"),
      },
    ],
  },
  {
    id: 1,
    title: "Day 2",
    estimatedTime: "1h 40m",
    plan: [
      {
        id: 302,
        title: "Geysir Thermal Field",
        description: "Geysers",
        estimation: "1h",
        isBookmarked: false,
        isCuratorsPick: false,
        image: require("@/public/images/geyser.webp"),
      },
      {
        id: 300,
        title: "Thingvellir",
        description: "Iconic hike, Light traffic",
        estimation: "1h",
        isBookmarked: false,
        isCuratorsPick: true,
        image: require("@/public/images/thing.webp"),
      },
    ],
  },
];
