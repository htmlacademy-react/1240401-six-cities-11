type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  lat: number;
  name: string;
  location: Location;
};

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
