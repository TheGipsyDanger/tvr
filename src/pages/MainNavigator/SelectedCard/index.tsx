import * as React from 'react';
import {
  AppBackground,
  Header,
  HeaderIcon,
  Subheader,
  Card,
  Screen,
  Button,
} from '~/components';
import {ISelectedCard} from '~/pages/MainNavigator/SelectedCard/SelectedCard.types';
import {useSelectedCard} from '~/pages/MainNavigator/SelectedCard/SelectedCard.model';

export const SelectedCard = (props: ISelectedCard.IView) => {
  const {goBack, goToAddCardForm, card} = useSelectedCard(props);
  return (
    <AppBackground statusBarType="dark-content">
      <Header.Root variant="default">
        <Header.Action
          onPress={goBack}
          icon={<HeaderIcon variant="arrow-back-sharp" />}
        />
        <Header.Content text="Wallet Test" variant="default" />
        <Header.Action
          onPress={goToAddCardForm}
          icon={<HeaderIcon variant="add" />}
        />
      </Header.Root>
      <Subheader />
      <Screen testID="Main" pb={9} justifyContent="center" mx={5} flex={1}>
        <Card
          type="Green Card"
          name={card.name}
          cardNumber={card.cardNumber}
          validity={card.validity}
        />
        <Button
          mt={5}
          onPress={() => {}}
          variant={'primary'}
          keyLabel="UseThisCard"
        />
      </Screen>
    </AppBackground>
  );
};
