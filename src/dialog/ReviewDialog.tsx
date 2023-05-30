import { SyntheticEvent, useContext, useState } from "react";
import { AppContext } from "../state/context";
import { setReviewingRestaurant } from "../state/actions";
import { Rating as TRating, Restaurant } from "../types";
import { Dialog, DialogTitle, Typography, Rating, Button } from '@mui/material';
import Upload from "./Upload";
import styled from "styled-components";
import { UppyFile } from "@uppy/core";

const ReviewButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0.5rem 1rem;
`;

type RatingItem = { name: string; value: number; onChange: (event: SyntheticEvent<Element, Event>, value: number | null) => void; }
type SimpleDialogProps = {
  open: boolean;
  restaurant: Restaurant | null;
  onClose: () => void;
}
function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, restaurant, open } = props;
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

  const handleClose = () => {
    onClose();
  };

  const ratings: RatingItem[] = [
    { name: 'Taste', value: ratingValues.taste, onChange: (_, value) => handleRatingChange('taste', value) },
    { name: 'Texture', value: ratingValues.texture, onChange: (_, value) => handleRatingChange('texture', value) },
    { name: 'Presentation', value: ratingValues.presentation, onChange: (_, value) => handleRatingChange('presentation', value) }
  ]

  return (  
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Review {restaurant?.name ?? ''}</DialogTitle>
      <Upload onChange={image => handleRatingChange('image', image)}></Upload>
      {ratings.map((r, idx) => (
        <RatingWrapper key={idx}>
          <Typography component="legend">{r.name}</Typography>
          <Rating
            name={r.name}
            value={r.value}
            onChange={r.onChange}
          />
        </RatingWrapper>
      ))}
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