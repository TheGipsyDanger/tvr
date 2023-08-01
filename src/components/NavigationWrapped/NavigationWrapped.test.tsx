import * as React from 'react';
import { NavigationWrapped }from './';
import { render } from '@testing-library/react-native';

describe('Render NavigationWrapped', () => {
  it('Should be NavigationWrapped exist', () => {
    const { getByTestId } = render(<NavigationWrapped />);
    const currentElement = getByTestId(`NavigationWrapped`);
    expect(currentElement).toBeTruthy();
  });
});