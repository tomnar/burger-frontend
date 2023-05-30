import styled from "styled-components";
import { Restaurant } from "../types";
import { Button, Typography, Rating, Link } from '@mui/material';
import { AppContext } from "../state/context";
import { useContext } from "react";
import { setReviewingRestaurant } from "../state/actions";
import LaunchIcon from '@mui/icons-material/Launch';

const ReviewButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
`;

const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
`;

const OpeningHourWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 7rem;
  object-fit: cover;
  margin-bottom: -0.5rem;
`;

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

type MapPopupProps = { restaurant: Restaurant }
export default function MapPopup({ restaurant }: MapPopupProps) {
  const { dispatch } = useContext(AppContext);
  const { ratings } = restaurant;
  const ratingsArray = [
    { name: 'Taste', value: ratings.reduce((sum, r) => { return sum + r.taste }, 0) / ratings.length },
    { name: 'Texture', value: ratings.reduce((sum, r) => { return sum + r.texture }, 0) / ratings.length },
    { name: 'Presentation', value: ratings.reduce((sum, r) => { return sum + r.presentation }, 0) / ratings.length }
  ]
  const mostRecentImage = [...ratings].reverse().find(r => r.image)?.image || null;
  return (
    <div>
      <Typography variant="overline">{restaurant.name} ({ratings.length})</Typography>
      {mostRecentImage && <Image src={mostRecentImage} alt="Most Recent Image" />}
      <hr></hr>
      <Typography component="p">{restaurant.descripion}</Typography>
      {ratingsArray.map((r, idx) => (
        <RatingWrapper key={idx}>
          <Typography component="legend">{r.name}</Typography>
          <Rating readOnly precision={0.1} name={r.name} value={r.value} />
          <Typography component="div">{r.value.toFixed(1)}</Typography>
        </RatingWrapper>
      ))}
      <Typography component="h3" mt={2}>Opening Hours</Typography>
      {restaurant.openingHours.map((oh, idx) => (
        <OpeningHourWrapper key={idx}>
          <Typography component="div">{weekDays[idx]}</Typography>
          <Typography component="div">{oh}</Typography>
        </OpeningHourWrapper>
      ))}
      <MenuWrapper>
        <Typography component="div">Menu card</Typography>
        <Link href={restaurant?.link || ''} rel="noreferrer" variant="body1" underline="none">Open <LaunchIcon style={{ fontSize: 'inherit' }}/></Link>
      </MenuWrapper>
      <ReviewButton variant="contained" onClick={() => dispatch(setReviewingRestaurant(restaurant))}>Add review</ReviewButton>
    </div>
  );
}