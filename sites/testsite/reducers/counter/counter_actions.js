import * as types from './counter_types';

/* eslint-disable import/prefer-default-export */
export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
