export type OffersReview = {
  id: number,
  name: string,
  type: string,
  mainPhoto: string,
  rating: number,
  price: number,
  city: string,
  location: {
    latitude: number,
    longitude: number
    }
};

export type City = {
  title: string,
  lat: number,
  lng: number,
  zoom: number
}
