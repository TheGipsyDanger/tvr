import * as React from 'react';
import {CreateCard} from './';
import {render} from '@testing-library/react-native';

describe('Render CreateCard', () => {
  it('Should be CreateCard exist', () => {
    const {getByTestId} = render(<CreateCard />);
    const currentElement = getByTestId(`CreateCard`);
    expect(currentElement).toBeTruthy();
  });
});
