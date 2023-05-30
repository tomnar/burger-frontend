import { useContext } from "react";
import { AppContext } from "../state/context";
import { addRating, setReviewingRestaurant } from "../state/actions";
import { Rating, Restaurant } from "../types";
import ReviewDialog from "./ReviewDialog";
import { uploadFile, uploadRating } from "../state/server.stub";
import { UppyFile } from "@uppy/core";

export default function ReviewPopup() {
  const { state, dispatch } = useContext(AppContext);
  const open = !!state.reviewingRestaurant;

  const handleClose = (rating: Rating, restaurant: Restaurant | null, file: UppyFile | null) => {
    if (restaurant) {
      uploadFile(file).then((fileUrl) => {
        uploadRating({...rating, image: fileUrl}, restaurant);
      })
      dispatch(addRating(rating, restaurant));
    } else {
      dispatch(setReviewingRestaurant(null));
    }
  };

  return (
    <ReviewDialog
      restaurant={state.reviewingRestaurant}
      open={open}
      onClose={handleClose}
    />
  );
}