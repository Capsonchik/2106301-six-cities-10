import MainPage from '../../pages/mainPage/main-page';
import { City, OffersReview } from '../../types/offers';

type Props = {
  countOfAvailablePlaces: number;
  offers: OffersReview[];
  city: City;
};

function App({countOfAvailablePlaces, offers, city}: Props): JSX.Element {
  return (
    <MainPage countOfAvailablePlaces={countOfAvailablePlaces} offers={offers} city={city}/>
  );
}

export default App;
