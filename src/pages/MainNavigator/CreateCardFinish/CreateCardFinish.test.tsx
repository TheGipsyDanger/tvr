import '~/translate/i18n';
import * as React from 'react';
import {CreateCardFinish} from './';
import {render} from '@testing-library/react-native';

describe('Render CreateCardFinish', () => {
  it('Should be CreateCardFinish exist', () => {
    const {getByTestId} = render(<CreateCardFinish />);
    const currentElement = getByTestId(`CreateCardFinish`);
    expect(currentElement).toBeTruthy();
  });
});
