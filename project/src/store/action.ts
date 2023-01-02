import { createAction } from '@reduxjs/toolkit';
import { SortingKeys } from '../types/offers';

export const changeCity = createAction('offers/changeCity', (city: string) => ({payload: city}));

export const changeSortName = createAction('offers/changeSortName', (sortName: SortingKeys) => ({payload: sortName}));

