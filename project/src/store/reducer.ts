import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offers';
import { changeCity } from './action';


type InitialState = {
  city: string;
  offers: Offer[];
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export default reducer;
