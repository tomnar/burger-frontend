import { Restaurant } from "../types";
import type { Action } from "./actions";

export const initialState = {
  restaurants: [] as Restaurant[],
  reviewingRestaurant: null as null | Restaurant,
};

export type Store = typeof initialState;

export const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case "SET_RESTAURANTS":
      const restaurants = action.payload.restaurants;
      return { ...state, restaurants };
    case "SET_REVIEWING_RESTAURANT":
      const restaurant = action.payload.restaurant;
      return { ...state, reviewingRestaurant: restaurant}
    default:
      console.error("Reducer called with unknown action: " + action)
      return state;
  }
};