import * as React from 'react';
import {AppBackground, Header, HeaderIcon} from '~/components';
import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {useMain} from '~/pages/MainNavigator/Main/Main.model';

export const Main = (props: IMain.IView) => {
  const {goBack, goToAddCardForm} = useMain(props);
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
    </AppBackground>
  );
};
