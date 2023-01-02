import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortingTypes } from '../const';
import { offers } from '../mocks/offers';
import { Offer, SortingKeys } from '../types/offers';
import { changeCity, changeSortName } from './action';


type InitialState = {
  city: string;
  offers: Offer[];
  sortName: SortingKeys;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers,
  sortName: Object.keys(SortingTypes)[0]
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

