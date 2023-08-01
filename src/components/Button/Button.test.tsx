import * as React from 'react';
import {Button} from '~/components/Button';
import {IButton} from '~/components/Button/Button.types';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from '~/styles/theme';

const Component = (props: IButton.IView) => (
  <ThemeProvider>
    <Button {...props} />
  </ThemeProvider>
);

describe('Render Button', () => {
  it('Should be Button exist', () => {
    const {getByTestId} = render(<Component />);
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
  });
});
