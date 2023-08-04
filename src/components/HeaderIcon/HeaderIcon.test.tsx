import * as React from 'react';
import {HeaderIcon} from './';
import {render} from '@testing-library/react-native';

describe('Render HeaderIcon', () => {
  it('Should be HeaderIcon exist', () => {
    const {getByTestId} = render(<HeaderIcon />);
    const currentElement = getByTestId(`HeaderIcon`);
    expect(currentElement).toBeTruthy();
  });
});
