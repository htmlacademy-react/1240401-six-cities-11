import { useRef, useEffect } from 'react';
import { Icon, LayerGroup, Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { City, Offer } from '../../types/offers';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  className: string;
  city: City;
  points: Offer[];
  selectedPoint?: number | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({ className, city, points, selectedPoint }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    map?.setView({ lat: city.location.latitude, lng: city.location.longitude }, city.location.zoom);
  }, [city, map]);

  const markerGroup = new LayerGroup();

  useEffect(() => {
    if (map) {
      points.forEach((point: Offer) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker.setIcon(
          point.id === selectedPoint
            ? currentCustomIcon
            : defaultCustomIcon
        );
        markerGroup.addLayer(marker);
      });
      markerGroup.addTo(map);
    }
    return () => {
      markerGroup.clearLayers();
    };
  });

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
