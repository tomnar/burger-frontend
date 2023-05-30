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
      const reviewingRestaurant = action.payload.restaurant;
      return { ...state, reviewingRestaurant }
    case "ADD_RATING":
      const { restaurant, rating } = action.payload;
      if (!restaurant) return state;
      const updatedRestaurants = state.restaurants.map((r) => {
        if (r.name === restaurant.name) {
          return {
            ...r,
            ratings: [...r.ratings, rating],
          };
        }
        return r;
      });
      return { ...state, restaurants: updatedRestaurants, reviewingRestaurant: null };
    default:
      console.error("Reducer called with unknown action: " + action)
      return state;
  }
};