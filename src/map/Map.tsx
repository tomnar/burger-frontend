import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useContext } from 'react';
import { AppContext } from '../state/context';
import MapMarker from './MapMarker';
import { useState, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';

export default function Map(props: { className?: string }) {
  const [location, setLocation] = useState<LatLngExpression>([55.730, 9.1105]);

  // Update the location if the users allows us to.
  // We use key prop to foce update. TODO: Research leaflet documentation to see if there is a dynamic way of updating center /Tomnar
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        }
      );
    }
  }, []);

  const { state } = useContext(AppContext);
  return (
    <div className={props.className}>
      <MapContainer key={location.toString()} style={{ height: '100%', width: '100%' }} center={location} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.restaurants.map((r, idx) => {
          return (<MapMarker key={idx} restaurant={r}></MapMarker>)
        })}
      </MapContainer>
    </div>
  );
}