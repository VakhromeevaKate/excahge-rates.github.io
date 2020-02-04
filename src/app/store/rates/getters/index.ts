import { GetterTree } from 'vuex';
import { IRatesState } from '../types';
import { RootState } from '../../types';

export const getters: GetterTree<IRatesState, RootState> = {
    getRates(state): object {
        return state.rates;
    },
    getBase(state): string {
        return state.base;
    },
    getDate(state): string {
        return state.date;
    },
    getError(state): string {
        return (state.error || '').toString();
    }
};
