import { useRef, useEffect } from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import {URL_MARKER_CURRENT} from '../../const';
import { City, Offer } from '../../types/offers';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  className: string;
  city: City;
  points: Offer[];
  selectedPoint?: number;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({ className, city, points, selectedPoint }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point: Offer) => {
        const marker = new Marker ({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
