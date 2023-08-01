import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { ITest } from '~/pages/MainNavigator/Test/Test.types'

export const Test = (props: ITest.IView) => (
  <Div flex={1} center testID={`Test`}>
    <Text color="ORANGE">{`Test`}</Text>
  </Div>
)