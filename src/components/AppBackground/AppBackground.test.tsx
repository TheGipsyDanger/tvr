import * as React from 'react';
import { AppBackground }from './';
import { render } from '@testing-library/react-native';

describe('Render AppBackground', () => {
  it('Should be AppBackground exist', () => {
    const { getByTestId } = render(<AppBackground />);
    const currentElement = getByTestId(`AppBackground`);
    expect(currentElement).toBeTruthy();
  });
});