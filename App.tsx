import '~/translate/i18n';
import * as React from 'react';
import {useCallback, useState, useEffect} from 'react';
import {NavigationWrapped, AppBackground} from '~/components';
import {Provider} from 'react-redux';
import {ThemeProvider} from '~/styles';
import store from '~/redux/store';
import Routes from '~/routes/Routes';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  PTSans_400Regular,
  PTSans_700Bold,
} from '@expo-google-fonts/pt-sans';

import {
  PTSansCaption_400Regular,
  PTSansCaption_700Bold,
} from '@expo-google-fonts/pt-sans-caption';

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSansCaption_400Regular,
    PTSans_700Bold,
    PTSansCaption_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    fontsLoaded && setAppIsReady(true);
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AppBackground onLayoutRootView={onLayoutRootView}>
      <NavigationWrapped>
        <ThemeProvider>
          <Provider store={store}>
            <Routes />
          </Provider>
        </ThemeProvider>
      </NavigationWrapped>
    </AppBackground>
  );
};

export default App;
