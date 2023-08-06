import * as React from 'react';
import { Card }from './';
import { render } from '@testing-library/react-native';

describe('Render Card', () => {
  it('Should be Card exist', () => {
    const { getByTestId } = render(<Card />);
    const currentElement = getByTestId(`Card`);
    expect(currentElement).toBeTruthy();
  });
});