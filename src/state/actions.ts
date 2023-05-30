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

export type Action =
  | ReturnType<typeof setRestaurants>
  | ReturnType<typeof setReviewingRestaurant>