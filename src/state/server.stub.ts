import { Restaurant } from "../types";

const RestaurantMockData: Restaurant[] = [
  {
    name: 'Mambo Jumbo',
    descripion: 'Biggest burgers in town!',
    link: "http://www.mambojumbo.dk",
    location: {
      lat: 55.735154290,
      lng: 9.10267311,
      address: 'Grindstedvej 10, 7190 Billund'
    },
    openingHours: ['4-8 pm', '4-8 pm', '4-8 pm', '4-8 pm', '4-8 pm', '4-8 pm', 'Closed'],
    ratings: [
      {
        taste: 5,
        texture: 5,
        presentation: 4,
        image: null
      },
      {
        taste: 4,
        texture: 4,
        presentation: 2,
        image: null
      },
      {
        taste: 4,
        texture: 3,
        presentation: 3,
        image: null
      }
    ]
  },
  {
    name: 'Burger Kitchen',
    descripion: 'Best burgers in Lego Land',
    location: {
      lat: 55.734747,
      lng: 9.1263464,
      address: 'Nordmarksvej 9, 7190 Billund'
    },
    openingHours: ['11:30 am-7:30 pm', '11:30 am-7:30 pm', '11:30 am-7:30 pm', '11:30 am-7:30 pm', '11:30 am-7:30 pm', '11:30 am-7:30 pm', '11:30 am-7:30 pm'],
    link: 'https://www.legoland.dk/udforsk/spisning-shopping/mad-drikke/burger-kitchen/',
    ratings: [
      {
        taste: 3,
        texture: 3,
        presentation: 3,
        image: null
      }
    ]
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