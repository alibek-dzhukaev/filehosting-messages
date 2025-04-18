import '@testing-library/jest-dom';
import 'reflect-metadata';
import { configure } from '@testing-library/react';

configure({
  testIdAttribute: 'data-test-id',
});

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

afterEach(() => {
  jest.clearAllMocks();
  import('tsyringe')
    .then(({ container }) => {
      container.reset();
    })
    .catch((err) => {
      console.warn('tsyringe import failed', err);
    });
});
