import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { IButton } from '~/components/Button/Button.types'

export const Button = (props: IButton.IView) => (
  <Div flex={1} center testID={`Button`}>
    <Text color="ORANGE">{`Button`}</Text>
  </Div>
)