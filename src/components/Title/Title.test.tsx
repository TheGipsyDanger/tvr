import * as React from 'react';
import { Title }from './';
import { render } from '@testing-library/react-native';

describe('Render Title', () => {
  it('Should be Title exist', () => {
    const { getByTestId } = render(<Title />);
    const currentElement = getByTestId(`Title`);
    expect(currentElement).toBeTruthy();
  });
});