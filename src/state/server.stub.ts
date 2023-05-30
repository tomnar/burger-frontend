import { Restaurant } from "../types";

const RestaurantMockData: Restaurant[] = [
  {
    name: 'Big Burgers',
    descripion: 'Biggest burgers in town!',
    location: {
      lat: 51.505,
      lng: -0.09,
      address: 'Porter Street 123'
    },
    ratings: []
  },
  {
    name: 'Your Burgers',
    descripion: 'Best burgers in town!',
    location: {
      lat: 51.605,
      lng: -0.29,
      address: 'Porter Street 3'
    },
    ratings: []
  }
]

export function loadData() {
  // return fetch(API);
  return new Promise<Restaurant[]>((resolve) => {
    setTimeout(() => {
      resolve(RestaurantMockData);
    }, Math.floor(Math.random() * 300));
 })
}