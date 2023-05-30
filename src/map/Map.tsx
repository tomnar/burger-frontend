import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useContext } from 'react';
import { AppContext } from '../state/context';
import MapMarker from './MapMarker';

export default function Map(props: { className?: string }) {
  const { state } = useContext(AppContext);
  return (
    <div className={props.className}>
      <MapContainer style={{ height: '100%', width: '100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.restaurants.map(r => {
          return (<MapMarker restaurant={r}></MapMarker>)
        })}
      </MapContainer>
    </div>
  );
}