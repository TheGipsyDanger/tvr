import * as React from 'react';
import {Div, Spacing, Text} from '~/components/Atomics';
import {AppBackground, Button} from '~/components';
import {IInitial} from '~/pages/MainNavigator/Initial/Initial.types';
import {useInitial} from '~/pages/MainNavigator/Initial/Initial.model';

export const Initial = (props: IInitial.IView) => {
  const {goToMyCards, goToAddCardForm} = useInitial(props);
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
