import styled from "styled-components";
import { Restaurant } from "../types";
import { Button } from '@mui/material';

const ReviewButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

type MapPopupProps = { restaurant: Restaurant }
export default function MapPopup({ restaurant }: MapPopupProps) {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <hr></hr>
      <div>{restaurant.descripion}</div>
      <ReviewButton variant="contained">Add review</ReviewButton>
    </div>
  );
}