import * as React from 'react';
import {
  AppBackground,
  Header,
  HeaderIcon,
  Title,
  Card,
  Button,
  Screen,
} from '~/components';
import {Div} from '~/components/Atomics';
import {ICreateCardFinish} from '~/pages/MainNavigator/CreateCardFinish/CreateCardFinish.types';
import {useCreateCardFinish} from '~/pages/MainNavigator/CreateCardFinish/CreateCardFinish.model';

export const CreateCardFinish = (props: ICreateCardFinish.IView) => {
  const {card, goToInitial, goToMain} = useCreateCardFinish(props);
  return (
    <AppBackground>
      <Header.Root variant="clean">
        <Header.Action
          onPress={goToInitial}
          icon={<HeaderIcon variant="arrow-back-sharp" />}
        />
        <Header.Content variant="clean" text="cadastro" />
      </Header.Root>
      <Screen flex={1} pb={9} justifyContent="center">
        <Div mx={5} pb={9}>
          <Title hasSublabel={true} />
          <Card
            name={card.name}
            type="Green Card"
            cardNumber={card.cardNumber}
            validity={card.validity}
          />
          <Button
            mt={5}
            onPress={goToMain}
            variant={'primary'}
            keyLabel="Next"
          />
        </Div>
      </Screen>
    </AppBackground>
  );
};
