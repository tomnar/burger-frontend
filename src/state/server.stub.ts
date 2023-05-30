import { UppyFile } from "@uppy/core";
import { Rating, Restaurant } from "../types";

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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hamburger_i_restaurant.jpg/320px-Hamburger_i_restaurant.jpg'
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Burger_King_Whopper_Combo.jpg/320px-Burger_King_Whopper_Combo.jpg'
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

export function uploadFile(file: UppyFile | null) {
  return new Promise<string | null>((resolve) => {
    if (!file) {
      resolve(null);
    } else {
      // add logic for handling updload of file.
      setTimeout(() => {
        resolve('https://blank.com'); // File location of uploaded file
      }, Math.floor(Math.random() * 300));
    }
  })
}

export function uploadRating(rating: Rating, restaurant: Restaurant) {
  // add logic for handling updload of file and data.
  // we are optimistic, se we do not wait for the server to return the data, but add it directly to our context.
  return;
}