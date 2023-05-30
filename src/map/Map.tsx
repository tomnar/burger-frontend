import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useContext } from 'react';
import { AppContext } from '../state/context';
import MapMarker from './MapMarker';

export default function Map(props: { className?: string }) {
  const { state } = useContext(AppContext);
  return (
    <div className={props.className}>
      <MapContainer style={{ height: '100%', width: '100%' }} center={[55.730, 9.1105]} zoom={15} scrollWheelZoom={false}>
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