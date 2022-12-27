import { createReducer } from '@reduxjs/toolkit';
// import { store } from '.';
import { CITIES, SortingTypes } from '../const';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offers';
import { changeCity, changeSortName } from './action';


type InitialState = {
  city: string;
  offers: Offer[];
  sortName: string;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers,
  sortName: SortingTypes.popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortName, (state, action) => {
      state.sortName = action.payload;
    });
});

export default reducer;

