import 'leaflet/dist/leaflet.css';
import '@uppy/core/dist/style.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { Restaurant } from './types';

const restaurants: Restaurant[] = [
  {
    name: 'Big Burgers',
    descripion: 'Biggest burgers in town!',
    location: {
      lat: 51.505,
      lng: -0.09,
      address: 'Porter Street 123'
    }
  },
  {
    name: 'Your Burgers',
    descripion: 'Best burgers in town!',
    location: {
      lat: 51.605,
      lng: -0.29,
      address: 'Porter Street 3'
    }
  }
]

export default function Map(props: { className?: string }) {
  return (
    <div className={props.className}>
      <MapContainer style={{ height: '100%', width: '100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants.map(r => {
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