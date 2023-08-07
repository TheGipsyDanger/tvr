import '~/translate/i18n';
import * as React from 'react';
import {Initial} from './';
import {render, fireEvent} from '@testing-library/react-native';

const mockOne = jest.fn();
const mockTwo = jest.fn();

jest.mock('~/pages/MainNavigator/Initial/Initial.model.ts', () => {
  return {
    useInitial: () => {
      return {
        goToMyCards: mockOne,
        goToAddCardForm: mockTwo,
        isLoading: false,
      };
    },
  };
});

describe('Render Initial', () => {
  it('Should be Initial exist', () => {
    const {getByTestId, getAllByTestId} = render(<Initial />);
    const currentElement = getByTestId(`Initial`);
    expect(currentElement).toBeTruthy();
    const buttons = getAllByTestId(`Button`);
    expect(buttons[0]).toBeTruthy();
    fireEvent.press(buttons[0]);
    expect(mockOne).toBeCalled();
    expect(buttons[1]).toBeTruthy();
    fireEvent.press(buttons[1]);
    expect(mockOne).toBeCalled();
  });
});
