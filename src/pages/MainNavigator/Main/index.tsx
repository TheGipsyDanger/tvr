import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { IMain } from '~/pages/Main/Main/Main.types'

export const Main = (props: IMain.IView) => (
  <Div flex={1} center testID={`Main`}>
    <Text color="ORANGE">{`Main`}</Text>
  </Div>
)