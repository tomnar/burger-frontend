import styled from "styled-components";
import { Restaurant } from "../types";
import { Button } from '@mui/material';
import { AppContext } from "../state/context";
import { useContext } from "react";
import { setReviewingRestaurant } from "../state/actions";

const ReviewButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

type MapPopupProps = { restaurant: Restaurant }
export default function MapPopup({ restaurant }: MapPopupProps) {
  const { dispatch } = useContext(AppContext);
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <hr></hr>
      <div>{restaurant.descripion}</div>
      <ReviewButton variant="contained" onClick={() => dispatch(setReviewingRestaurant(restaurant))}>Add review</ReviewButton>
    </div>
  );
}