import { useContext, useState } from "react";
import { AppContext } from "./state/context";
import { setReviewingRestaurant } from "./state/actions";
import { Rating as TRating, Restaurant } from "./types";
import { Dialog, DialogTitle, Typography, Rating, Button } from '@mui/material';
import Upload from "./Upload";
import styled from "styled-components";
import { UppyFile } from "@uppy/core";

const ReviewButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

type SimpleDialogProps = {
  open: boolean;
  restaurant: Restaurant | null;
  onClose: () => void;
}
function SimpleDialog(props: SimpleDialogProps) {
  const [ratingValues, setRatingValues] = useState<TRating>({
    taste: 0,
    texture: 0,
    presentation: 0,
    image: '',
  });

  const handleRatingChange = (name: string, value: number | null | UppyFile) => {
    setRatingValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const { onClose, restaurant, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Review {restaurant?.name ?? ''}</DialogTitle>
      <Upload onChange={image => handleRatingChange('image', image)}></Upload>
      <Typography component="legend">Taste</Typography>
      <Rating
        name="taste"
        value={ratingValues.taste}
        onChange={(_, value) => handleRatingChange('taste', value)}
      />
      <Typography component="legend">Texture</Typography>
      <Rating
        name="texture"
        value={ratingValues.texture}
        onChange={(_, value) => handleRatingChange('texture', value)}
      />
      <Typography component="legend">Presentation</Typography>
      <Rating
        name="presentation"
        value={ratingValues.presentation}
        onChange={(_, value) => handleRatingChange('presentation', value)}
      />
      <ReviewButton variant="contained" onClick={() => {
        handleClose()
        console.log(ratingValues);
      }}>Add review</ReviewButton>
    </Dialog>
  );
}

export default function ReviewPopup() {
  const { state, dispatch } = useContext(AppContext);
  const open = !!state.reviewingRestaurant;

  const handleClose = () => {
    /*
    setTimeout(() => {

    })*/
    dispatch(setReviewingRestaurant(null));
  };

  return (
    <SimpleDialog
      restaurant={state.reviewingRestaurant}
      open={open}
      onClose={handleClose}
    />
  );
}