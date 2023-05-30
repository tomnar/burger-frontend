// All type definitions are kept in this file for now. Ideally it will follow the modularization of the rest of the app, so we don't create one big file.

type Location = {
  lat: number;
  lng: number;
  address: string;
}

export type Restaurant = {
  name: string;
  location: Location;
  descripion: string;
}