import * as React from 'react';
import { SelectedCard }from './';
import { render } from '@testing-library/react-native';

describe('Render SelectedCard', () => {
  it('Should be SelectedCard exist', () => {
    const { getByTestId } = render(<SelectedCard />);
    const currentElement = getByTestId(`SelectedCard`);
    expect(currentElement).toBeTruthy();
  });
});