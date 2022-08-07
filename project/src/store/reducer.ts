import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { OffersReview } from '../types/offers';
import { loadAllOffersAction } from './action';

type InitialState = {
  city: string,
  offer: OffersReview[]
}


const initialState: InitialState = {
  city: 'Amsterdam',
  offer: offers.filter((offer) => offer.city === 'Amsterdam')
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllOffersAction, (state, action) => {
      state.offer = action.payload;
    });
});
