import * as React from 'react';
import { Subheader }from './';
import { render } from '@testing-library/react-native';

describe('Render Subheader', () => {
  it('Should be Subheader exist', () => {
    const { getByTestId } = render(<Subheader />);
    const currentElement = getByTestId(`Subheader`);
    expect(currentElement).toBeTruthy();
  });
});