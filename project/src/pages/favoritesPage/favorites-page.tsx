import Amsterdam from '../../components/favoritesCitys/amsterdam/amsterdam';
import Berlin from '../../components/favoritesCitys/berlin/berlin';
import FavoritesList from '../../components/favoritesList/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { OffersReview } from '../../types/offers';

type favoritesPageProps = {
  offers: OffersReview[];
}

function FavoritesPage({offers}: favoritesPageProps) {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <Amsterdam offers={offers}/>
              <Berlin offers={offers}/>
              <FavoritesList offers={offers}/>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
