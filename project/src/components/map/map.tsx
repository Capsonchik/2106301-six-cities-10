import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import { OffersReview } from '../../types/offers';

type mapProps = {
  offers: OffersReview[];

};

function Map({offers}:mapProps) {
  const mapRef = useRef(null);
  const location: any = [];
  offers.forEach((offer) => location.push(offer.location));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMap(mapRef, location);

  


  return (
    <div style={{ height: '500px'}} ref={mapRef}>
      test
    </div>
  );
}

export default Map;
