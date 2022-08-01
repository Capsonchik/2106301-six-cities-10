import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { City, OffersReview } from '../../types/offers';
import {Marker, Icon} from 'leaflet';
import { URL_MARKER_DEFAULT } from '../../consts';
import 'leaflet/dist/leaflet.css';

type mapProps = {
  offers: OffersReview[];
  city: City;
};

const deafultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({offers, city}:mapProps) {
  const mapRef = useRef(null);
  const currentLocations:Array<OffersReview['location']> = [];
  offers.map((offer) => currentLocations.push(offer.location));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMap({mapRef, city});

  useEffect(() => {
    if(map) {
      currentLocations.forEach((loc: any) => {
        const marker = new Marker({
          lat: loc.latitude,
          lng: loc.longitude
        });

        marker
          .setIcon(deafultCustomIcon)
          .addTo(map);
      } );
    }
  }, [map, currentLocations]);


  return (
    <div style={{ height: '100%', width: '100%'}} ref={mapRef}>

    </div>
  );
}

export default Map;
