import { Link } from 'react-router-dom';
import { OffersReview } from '../../types/offers';
import FavoritesCard from '../cards/fovorites-card';


type favoritesProps = {
  offers: OffersReview[];
}

function FavoritesList({ offers }: favoritesProps) {
  const a:string[] = [];
  offers.forEach((offer) => a.push(offer.city));
  const b = new Set(a);
  const c = Array.from(b);

  const renderCities = c.map((city) => {
    const filteredOffers = offers.filter((offer) => offer.city === city);

    return (
      <li key={city} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/">
              <span>{city}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          {filteredOffers.map((offer) => <FavoritesCard offer={offer} key={offer.id} />)}
        </div>
      </li>
    );
  });

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {renderCities}
    </>
  );
}

export default FavoritesList;
