import { useContext } from "react";
import { AppContext } from "../state/context";
import { addRating } from "../state/actions";
import { Rating, Restaurant } from "../types";
import ReviewDialog from "./ReviewDialog";

export default function ReviewPopup() {
  const { state, dispatch } = useContext(AppContext);
  const open = !!state.reviewingRestaurant;

  const handleClose = (rating: Rating, restaurant: Restaurant | null) => {
    dispatch(addRating(rating, restaurant));
  };

  return (
    <ReviewDialog
      restaurant={state.reviewingRestaurant}
      open={open}
      onClose={handleClose}
    />
  );
}