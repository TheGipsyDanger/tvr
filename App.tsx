import '~/translate/i18n';
import * as React from 'react';
import {View} from 'react-native';
import {useCallback, useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '~/styles';
import {navigationRef} from '~/utils/navigator';
import store from '~/redux/store';
import Routes from '~/routes/Routes';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

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
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <NavigationContainer
        ref={navigationRef as React.Ref<NavigationContainerRef>}
      >
        <ThemeProvider>
          <Provider store={store}>
            <Routes />
          </Provider>
        </ThemeProvider>
      </NavigationContainer>
    </View>
  );
};

export default App;
