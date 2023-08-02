import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {AppBackground} from '~/components';
import {ICreateCard} from '~/pages/MainNavigator/CreateCard/CreateCard.types';

export const CreateCard = (props: ICreateCard.IView) => (
  <AppBackground>
    <Div flex={1} center testID={`CreateCard`}>
      <Text color="ORANGE">{`CreateCard`}</Text>
    </Div>
  </AppBackground>
);
