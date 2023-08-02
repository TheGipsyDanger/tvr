import * as React from 'react';
import {Dimensions} from 'react-native';
import {Div, Text} from '~/components/Atomics';
import {Button, AppBackground} from '~/components';
import {ITest} from '~/pages/MainNavigator/Test/Test.types';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height / 2;

export const Test = (props: ITest.IView) => (
  <AppBackground>
    <Div justifyContent="space-between" bg="blue:strong" testID={`Test`}></Div>
  </AppBackground>
);
