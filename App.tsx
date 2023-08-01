import '~/translate/i18n';
import * as React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '~/styles';
import {navigationRef} from '~/utils/navigator';
import store from '~/redux/store';
import Routes from '~/routes/Routes';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {
  useFonts,
  PTSans_400Regular,
  PTSans_700Bold,
} from '@expo-google-fonts/pt-sans';

import {
  PTSansCaption_400Regular,
  PTSansCaption_700Bold,
} from '@expo-google-fonts/pt-sans-caption';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSansCaption_400Regular,
    PTSans_700Bold,
    PTSansCaption_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer
      ref={navigationRef as React.Ref<NavigationContainerRef>}
    >
      <ThemeProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
