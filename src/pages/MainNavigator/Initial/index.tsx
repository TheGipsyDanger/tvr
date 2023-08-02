import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {AppBackground} from '~/components';
import {IInitial} from '~/pages/MainNavigator/Initial/Initial.types';

export const Initial = (props: IInitial.IView) => (
  <AppBackground>
    <Div flex={1} center testID={`Initial`}>
      <Text color="ORANGE">{`Initial`}</Text>
    </Div>
  </AppBackground>
);
