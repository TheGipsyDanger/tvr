import * as React from 'react';
import { Initial }from './';
import { render } from '@testing-library/react-native';

describe('Render Initial', () => {
  it('Should be Initial exist', () => {
    const { getByTestId } = render(<Initial />);
    const currentElement = getByTestId(`Initial`);
    expect(currentElement).toBeTruthy();
  });
});