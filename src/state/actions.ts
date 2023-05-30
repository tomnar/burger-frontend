import { Rating } from "../types";
import { Restaurant } from "../types";

export const setRestaurants = (
  restaurants: Restaurant[]
): {
  type: "SET_RESTAURANTS",
  payload: {
    restaurants: Restaurant[]
  }
} => ({
  type: "SET_RESTAURANTS",
  payload: {
    restaurants
  }
});

export const setReviewingRestaurant = (
  restaurant: Restaurant | null
): {
  type: "SET_REVIEWING_RESTAURANT",
  payload: {
    restaurant: Restaurant | null
  }
} => ({
  type: "SET_REVIEWING_RESTAURANT",
  payload: {
    restaurant
  }
});

export const addRating = (
  rating: Rating,
  restaurant: Restaurant
): {
  type: "ADD_RATING",
  payload: {
    restaurant: Restaurant,
    rating: Rating,
  }
} => ({
  type: "ADD_RATING",
  payload: {
    restaurant,
    rating,
  }
});

export type Action =
  | ReturnType<typeof setRestaurants>
  | ReturnType<typeof setReviewingRestaurant>
  | ReturnType<typeof addRating>