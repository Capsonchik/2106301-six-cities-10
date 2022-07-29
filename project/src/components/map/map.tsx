import { useRef } from 'react';
import { OffersReview } from '../../types/offers';

type mapProps = {
  offers: OffersReview[];
};

function Map({offers}:mapProps) {
  const mapRef = useRef(null);
  const location = [];
  offers.forEach((offer) => location.push(offer.location));


  return (
    <div style={{ height: '500px'}} ref={mapRef}>
      test
    </div>
  );
}

export default Map;
