export type ShortTripInfoType = {
  id: number;
  title: string;
  description: string;
};

export type HighlightsType = {
  avatarImg: string;
  title: string;
  description: string;
  curator: string;
  role: string;
};

export type ItineraryType = {
  title: string;
  description: string;
  tags: string[];
};

export type CardInfoType = {
  id: number;
  title: string;
  description: string;
  isCuratorsPick: boolean;
  isBookmarked: boolean;
  estimation: string;
  image: string;
  rating?: string;
};

export type RegionType = {
  id: number;
  generalInfo: ItineraryType;
  regionalHighlights: CardInfoType[];
  whereToStay: CardInfoType[];
};
