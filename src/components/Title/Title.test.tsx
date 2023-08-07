import '~/translate/i18n';
import * as React from 'react';
import {Title} from './';
import {render} from '@testing-library/react-native';

describe('Render Title', () => {
  it('Should be Title exist', () => {
    const {getByTestId} = render(<Title hasSublabel={true} />);
    const currentElement = getByTestId(`Title`);
    expect(currentElement).toBeTruthy();
    const currentElementTitle = getByTestId(`Title:Title`);
    expect(currentElementTitle).toBeTruthy();
    expect(currentElementTitle.props.children.props.i18nKey).toBe(
      'components.Title.title'
    );
    const currentElementSubtitle = getByTestId(`Title:Sublabel`);
    expect(currentElementSubtitle).toBeTruthy();
    expect(currentElementSubtitle.props.children.props.i18nKey).toBe(
      'components.Title.subtitle'
    );
  });
});
