import * as React from 'react';
import {AppBackground} from './';
import {Text} from '~/components/Atomics';
import {render} from '@testing-library/react-native';

describe('Render AppBackground', () => {
  it('Should be AppBackground exist', () => {
    const {getByTestId} = render(<AppBackground />);
    const currentElement = getByTestId(`AppBackground`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be AppBackground render a children', () => {
    const {getByTestId} = render(
      <AppBackground>
        <Text testID="AppBackground:children">{'test'}</Text>
      </AppBackground>
    );
    const currentElement = getByTestId(`AppBackground:children`);
    expect(currentElement).toBeTruthy();
  });
});
