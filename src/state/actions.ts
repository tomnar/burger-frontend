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

export type Action =
  | ReturnType<typeof setRestaurants>