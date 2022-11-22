import { useRef, useEffect } from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { City, Points, Point } from '../../types/offers';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  className: string;
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ className, city, points, selectedPoint }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker ({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(
          selectedPoint !== undefined && point.title === selectedPoint.title
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      style={{ height: '500px' }}
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
