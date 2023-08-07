import '~/translate/i18n';
import * as React from 'react';
import {Trans} from 'react-i18next';
import {Button} from '~/components/Button';
import {IButton} from '~/components/Button/Button.types';
import {render, fireEvent} from '@testing-library/react-native';
import {ThemeProvider} from '~/styles/theme';

const Component = (props: IButton.IView) => (
  <ThemeProvider>
    <Button {...props} />
  </ThemeProvider>
);

const fn = jest.fn();

describe('Render Button', () => {
  it('Should be Button disable with add card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="disable"
        keyLabel="AddCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.AddCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button disable with my cards label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="disable"
        keyLabel="MyCards"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.MyCards'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button disable with next label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="disable"
        keyLabel="Next"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.Next'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button disable with this card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="disable"
        keyLabel="ThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.ThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button disable with use this card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="disable"
        keyLabel="UseThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.UseThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button link with add card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="link"
        keyLabel="MyCards"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.MyCards'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button link with my cards label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="link"
        keyLabel="MyCards"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.MyCards'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button link with next label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="link"
        keyLabel="Next"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.Next'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button link with this card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="link"
        keyLabel="ThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.ThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button link with this card  label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="link"
        keyLabel="UseThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.UseThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button primary with add card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="primary"
        keyLabel="MyCards"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.MyCards'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button primary with my cards label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="primary"
        keyLabel="MyCards"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.MyCards'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button primary with next label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="primary"
        keyLabel="Next"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.Next'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button primary with this card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="primary"
        keyLabel="ThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.ThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button primary with this card  label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="primary"
        keyLabel="UseThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.UseThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button success with add card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="success"
        keyLabel="MyCards"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.MyCards'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button success with my cards label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="success"
        keyLabel="MyCards"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.MyCards'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button success with next label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="success"
        keyLabel="Next"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.Next'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button success with this card label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="success"
        keyLabel="ThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.ThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
  it('Should be Button success with this card  label', () => {
    const {getByTestId} = render(
      <Component
        onPress={fn}
        isLoading={false}
        variant="success"
        keyLabel="UseThisCard"
      />
    );
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
    const currentElementLabel = getByTestId(`Button:Label`);
    expect(currentElementLabel).toBeTruthy();
    expect(currentElementLabel.props.children.props.i18nKey).toBe(
      'components.Button.UseThisCard'
    );
    fireEvent.press(currentElement);
    expect(fn).toBeCalled();
  });
});
