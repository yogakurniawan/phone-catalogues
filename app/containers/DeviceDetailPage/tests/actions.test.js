import {
  LOAD_BRANDS,
  LOAD_BRANDS_SUCCESS,
  LOAD_BRANDS_ERROR,
} from '../constants';

import {
  loadBrands,
  brandsLoaded,
  brandsLoadingError,
} from '../actions';

describe('Brands Actions', () => {
  describe('loadBrands', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_BRANDS,
      };

      expect(loadBrands()).toEqual(expectedResult);
    });
  });

  describe('brandsLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const brands = [{
        title: 'APPLE',
      }];
      const username = 'test';
      const expectedResult = {
        type: LOAD_BRANDS_SUCCESS,
        brands,
        username,
      };

      expect(brandsLoaded(brands)).toEqual(expectedResult);
    });
  });

  describe('brandsLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_BRANDS_ERROR,
        error: fixture,
      };

      expect(brandsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
