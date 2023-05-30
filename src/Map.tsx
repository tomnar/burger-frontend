import 'leaflet/dist/leaflet.css';
import '@uppy/core/dist/style.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { useContext } from 'react';
import { AppContext } from './state/context';

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
          return (<Marker position={[r.location.lat, r.location.lng]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>)
        })}
      </MapContainer>
    </div>
  );
}