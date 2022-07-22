import MainPage from '../../pages/mainPage/main-page';
import { OffersReview } from '../../types/offers';

type Props = {
  countOfAvailablePlaces: number;
  offers: OffersReview[];
};

function App({countOfAvailablePlaces, offers}: Props): JSX.Element {
  return (
    <MainPage countOfAvailablePlaces = {countOfAvailablePlaces} offers = {offers}/>
  );
}

export default App;
