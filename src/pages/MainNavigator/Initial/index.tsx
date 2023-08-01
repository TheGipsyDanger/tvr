import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { IInitial } from '~/pages/MainNavigator/Initial/Initial.types'

export const Initial = (props: IInitial.IView) => (
  <Div flex={1} center testID={`Initial`}>
    <Text color="ORANGE">{`Initial`}</Text>
  </Div>
)