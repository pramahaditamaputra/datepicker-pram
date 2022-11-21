import { describe, test, expect } from '@jest/globals';
import {
  isSame,
  isBefore,
  isAfter,
  isBetween,
  maxDateAndAfter,
  minDateAndBefore,
  minDateAndBeforeFirstDay,
} from '../utils/predicates';

describe('isSame', () => {
  test('isSame should return true if dates is equal', () => {
    const d1 = new Date(2022, 10, 21);
    const d2 = d1;
    const d3 = new Date(2022, 10, 21, 12);

    expect(isSame(d1, d2)).toBe(true);
    expect(isSame(d1, d3)).toBe(false);
  });
});

describe('isBefore', () => {
  test('isBefore should return true if date1 < date2', () => {
    const d1 = new Date(2022, 10, 21);
    const d2 = d1;
    const d3 = new Date(2022, 10, 21, 12);
    const d4 = new Date(2022, 10, 20, 11);

    expect(isBefore(d1, d2)).toBe(false);
    expect(isBefore(d1, d3)).toBe(true);
    expect(isBefore(d3, d1)).toBe(false);
    expect(isBefore(d4, d1)).toBe(true);
  });
});

describe('isAfter', () => {
  test('isAfter should return true if date1 > date2', () => {
    const d1 = new Date(2022, 10, 21);
    const d2 = d1;
    const d3 = new Date(2022, 10, 21, 12);

    expect(isAfter(d1, d2)).toBe(false);
    expect(isAfter(d1, d3)).toBe(false);
    expect(isAfter(d3, d1)).toBe(true);
  });
});

describe('isBetween', () => {
  test('isBefore should return true is date1 < date2 < date3 or date1 > date2 > date3', () => {
    const d1 = new Date(2022, 10, 21);
    const d2 = d1;
    const d3 = new Date(2022, 10, 20);
    const d4 = new Date(2022, 10, 22);

    expect(isBetween(d3, d1, d4)).toBe(true);
    expect(isBetween(d4, d1, d3)).toBe(true);
    expect(isBetween(d1, d2, d3)).toBe(false);
    expect(isBetween(d3, d1, d2)).toBe(false);
  });
});

describe('maxDateAndAfter', () => {
  test('maxDateAndAfter should return true if maxDate is exist and date > maxDate', () => {
    const d1 = new Date(2022, 10, 21);
    const d2 = new Date(2022, 10, 30);
    const maxDate = new Date(2022, 10, 23);

    expect(maxDateAndAfter(maxDate, d1)).toBe(false);
    expect(maxDateAndAfter(maxDate, d2)).toBe(true);
    expect(maxDateAndAfter(d2, d2)).toBe(false);
    expect(maxDateAndAfter(null, d2)).toBe(false);
  });
});

describe('minDateAndBefore', () => {
  test('minDateAndBefore should return true if minDate is exist and date < minDate', () => {
    const d1 = new Date(2022, 10, 21);
    const d2 = new Date(2022, 10, 30);
    const minDate = new Date(2022, 10, 23);

    expect(minDateAndBefore(minDate, d1)).toBe(true);
    expect(minDateAndBefore(minDate, d2)).toBe(false);
    expect(minDateAndBefore(d2, d2)).toBe(false);
    expect(minDateAndBefore(null, d1)).toBe(false);
  });
});

describe('minDateAndBeforeFirstDay', () => {
  test('minDateAndBeforeFirstDay should return true if minDate is exist and 1 day of the month <  minDate', () => {
    const d1 = new Date(2022, 9, 21);
    const d2 = new Date(2022, 10, 30);
    const minDate = new Date(2022, 10, 23);

    expect(minDateAndBeforeFirstDay(minDate, d1)).toBe(true);
    expect(minDateAndBefore(minDate, d2)).toBe(false);
    expect(minDateAndBefore(d2, d2)).toBe(false);
    expect(minDateAndBefore(null, d1)).toBe(false);
  });
});
