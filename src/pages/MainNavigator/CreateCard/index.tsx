import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {AppBackground, Header, HeaderIcon} from '~/components';
import {useCreateCard} from '~/pages/MainNavigator/CreateCard/CreateCard.model';
import {ICreateCard} from '~/pages/MainNavigator/CreateCard/CreateCard.types';

export const CreateCard = (props: ICreateCard.IView) => {
  const {goBack} = useCreateCard(props);
  return (
    <AppBackground>
      <Header.Root variant="clean">
        <Header.Action
          onPress={goBack}
          icon={<HeaderIcon variant="arrow-back-sharp" />}
        />
        <Header.Content variant="clean" text="cadastro" />
      </Header.Root>
      <Div flex={1} center testID={`CreateCard`}>
        <Text color="ORANGE">{`CreateCard`}</Text>
      </Div>
    </AppBackground>
  );
};
