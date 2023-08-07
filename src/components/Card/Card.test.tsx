import * as React from 'react';
import {Card} from './';
import {ICard} from '~/components/Card/Card.types';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from '~/styles/theme';

const Component = (props: ICard.IView) => (
  <ThemeProvider>
    <Card {...props} />
  </ThemeProvider>
);

describe('Render Card', () => {
  it('Should be Card exist', () => {
    const {getByTestId} = render(
      <Component
        type="Green Card"
        cardNumber="3529 5435 3355 8727"
        name="Vanesso pudinick"
        validity="09/23"
      />
    );
    const currentElement = getByTestId(`Card`);
    expect(currentElement).toBeTruthy();

    const currentElementLabel = getByTestId(`Card:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children).toBe('Green Card');

    const currentElementName = getByTestId(`Card:Name`);
    expect(currentElementName).toBeTruthy();
    expect(currentElementName.props.children).toBe('Vanesso pudinick');

    const currentElementCardNumber = getByTestId(`Card:CardNumber`);
    expect(currentElementCardNumber).toBeTruthy();
    expect(currentElementCardNumber.props.children).toBe('•••• •••• •••• 8727');

    const currentElementValidate = getByTestId(`Card:Validate`);
    expect(currentElementValidate).toBeTruthy();
    expect(currentElementValidate.props.children).toBe('Validade 09/23');
  });
});
