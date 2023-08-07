import * as React from 'react';
import {FlatList} from 'react-native';
import {AppBackground, Header, HeaderIcon, Subheader, Div} from '~/components';
import {IMain} from '~/pages/MainNavigator/Main/Main.types';
import {useMain} from '~/pages/MainNavigator/Main/Main.model';
import {theme} from '~/styles/theme';

export const Main = (props: IMain.IView) => {
  const {goBack, goToAddCardForm, cards, renderItem, keyExtractor} =
    useMain(props);
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
      <Div testID="Main" mx={5} flex={1}>
        <FlatList
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            paddingBottom: theme.space[9],
          }}
          data={cards}
          extraData={cards}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </Div>
    </AppBackground>
  );
};
