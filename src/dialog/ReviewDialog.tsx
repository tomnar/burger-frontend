import { SyntheticEvent, useState } from "react";
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
  onClose: (raiting: TRating, restaurant: Restaurant | null) => void;
}
export default function ReviewDialog(props: SimpleDialogProps) {
  const { onClose, restaurant, open } = props;
  const initialState = { taste: 0, texture: 0, presentation: 0, image: ''};
  const [ratingValues, setRatingValues] = useState<TRating>(initialState);

  const handleRatingChange = (name: string, value: number | null | UppyFile) => {
    setRatingValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClose = (rating: TRating, restaurant: Restaurant | null) => {
    setRatingValues(initialState);
    onClose(rating, restaurant);
  };

  const ratings: RatingItem[] = [
    { name: 'Taste', value: ratingValues.taste, onChange: (_, value) => handleRatingChange('taste', value) },
    { name: 'Texture', value: ratingValues.texture, onChange: (_, value) => handleRatingChange('texture', value) },
    { name: 'Presentation', value: ratingValues.presentation, onChange: (_, value) => handleRatingChange('presentation', value) }
  ]

  return (  
    <Dialog onClose={() => handleClose(ratingValues, null)} open={open}>
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
        handleClose(ratingValues, restaurant);
      }}>Add review</ReviewButton>
    </Dialog>
  );
}
