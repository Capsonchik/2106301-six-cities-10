import { Link } from "react-router-dom";
import { OffersReview } from "../../types/offers";
import FavoritesCard from "../cards/fovorites-card";


// type favoritesProps = {
//   offers: OffersReview[];
// }

function FavoritesList({offers}) {
  const a = []
  offers.forEach(offer => a.push(offer.city))
  console.log(a)
  const b = new Set(a)
  console.log(b)
  const c = Array.from(b)
  console.log(c)

  // const testCity = (offers, el) => {
  //   offers.map(offer => {
  //     if(offer.city == el) {
  //       return <FavoritesCard offers={offers}/>
  //     }
  //   })
  // }


  const renderCity = c.map((el, offers) => {

    const test = () => {
      if(el === offers.city) {
        <FavoritesCard offers={offers} />
      }
    }

    return(
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/">
              <span>{el}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
            {test}
        </div>
      </li>
    )
  })

  return (
    <>
      {renderCity}
    </>
   );
}

export default FavoritesList;
