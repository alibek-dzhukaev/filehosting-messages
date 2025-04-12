import '@testing-library/jest-dom';
import 'reflect-metadata';
import { configure } from '@testing-library/react';

configure({
    testIdAttribute: 'data-test-id',
});

global.matchMedia = global.matchMedia || function() {
    return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

afterEach(() => {
    jest.clearAllMocks();
    try {
        const { container } = require('tsyringe');
        container.reset();
    } catch (e) {
        console.warn('tsyringe container reset failed', e);
    }
});