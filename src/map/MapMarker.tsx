import MapPopup from "./MapPopup";
import { Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Restaurant } from "../types";
import { Icon } from 'leaflet'

type MarkerProps = {
  restaurant: Restaurant
}
export default function MapMarker({ restaurant }: MarkerProps) {
  const { location } = restaurant;
  return (
    <Marker position={[location.lat, location.lng]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
      <Popup><MapPopup restaurant={restaurant}></MapPopup></Popup>
    </Marker>
  );
}
