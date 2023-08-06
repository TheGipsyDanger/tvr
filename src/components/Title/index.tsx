import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Trans} from 'react-i18next';
import {ITitle} from '~/components/Title/Title.types';

export const Title = ({hasSublabel = false}: ITitle.IView) => (
  <Div testID={`Title`} center mb={5}>
    <Text testID={`Title:title`} variant="h1:regularCaption" color="white">
      <Trans i18nKey={`components.Title.title`} />
    </Text>
    {hasSublabel && (
      <Text variant="h4:regular" color="white" testID={`Title:subtitle`}>
        <Trans i18nKey={`components.Title.subtitle`} />
      </Text>
    )}
  </Div>
);
