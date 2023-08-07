import '~/translate/i18n';
import * as React from 'react';
import {Subheader} from './';
import {render} from '@testing-library/react-native';

describe('Render Subheader', () => {
  it('Should be Subheader exist', () => {
    const {getByTestId} = render(<Subheader />);
    const currentElement = getByTestId(`Subheader`);
    expect(currentElement).toBeTruthy();

    const currentElementLabel = getByTestId(`Subheader:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Header.MyCards'
    );
  });
});
