// All type definitions are kept in this file for now. Ideally it will follow the modularization of the rest of the app, so we don't create one big file.

type Location = {
  lat: number;
  lng: number;
  address: string;
}

export type Rating = {
  taste: number,
  texture: number,
  presentation: number,
  image: string | null;
}

export type Restaurant = {
  name: string;
  location: Location;
  descripion: string;
  ratings: Rating[];
  link: string | null;
  openingHours: string[]; // Assumes array with 7 strings, starting with monday
}