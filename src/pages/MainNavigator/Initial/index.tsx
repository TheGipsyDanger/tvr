import * as React from 'react';
import {Div, Spacing} from '~/components/Atomics';
import {AppBackground, Button, Title} from '~/components';
import {IInitial} from '~/pages/MainNavigator/Initial/Initial.types';
import {useInitial} from '~/pages/MainNavigator/Initial/Initial.model';

export const Initial = (props: IInitial.IView) => {
  const {isLoading, goToMyCards, goToAddCardForm} = useInitial(props);

  return (
    <AppBackground>
      <Div flex={1} justifyContent="center" testID={`Initial`}>
        <Div mx={5}>
          <Title />
          <Spacing space={3}>
            <Button
              isLoading={isLoading}
              variant="primary"
              keyLabel="MyCards"
              onPress={goToMyCards}
            />
            <Button
              isLoading={isLoading}
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
