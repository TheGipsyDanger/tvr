import * as React from 'react';
import {Div, Spacing, Text} from '~/components/Atomics';
import {Button, AppBackground} from '~/components';
import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {useMain} from '~/pages/MainNavigator/Main/Main.model';

export const Main = (props: IMain.IView) => {
  const {goToMyCards, goToAddCardForm} = useMain(props);
  return (
    <AppBackground>
      <Div flex={1} justifyContent="center" testID={`Main`}>
        <Div mx={5}>
          <Text
            variant="h1:regularCaption"
            color="white"
            textAlign="center"
            mb={5}
          >
            Wallet Test
          </Text>
          <Spacing space={3}>
            <Button
              variant="primary"
              keyLabel="MyCards"
              onPress={goToMyCards}
            />
            <Button
              variant="success"
              keyLabel="AddCard"
              onPress={goToAddCardForm}
            />
          </Spacing>
        </Div>
      </Div>
    </AppBackground>
  );
};
