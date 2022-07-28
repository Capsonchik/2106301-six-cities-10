import { useState } from 'react';
import { OffersReview } from '../../types/offers';
import Card from '../cards/card';

type sentensProps = {
  offers: OffersReview[];
}

function SentensCards({offers}:sentensProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number>();

  const handleMouseEnter = (id: number) => {
    setActiveCardId(id);
  };

  return(
    <>
      {
        offers.map((offer) => <Card needToRemoove={activeCardId} onMouseEnter={handleMouseEnter} key={offer.id} offer={offer}/> )
      }
    </>
  );
}

export default SentensCards;
