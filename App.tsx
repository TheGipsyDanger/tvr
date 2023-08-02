import '~/translate/i18n';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {NavigationWrapped, AppBackground} from '~/components';
import {Provider} from 'react-redux';
import {ThemeProvider} from '~/styles';
import store from '~/redux/store';
import Routes from '~/routes/Routes';

import {
  useFonts,
  PTSans_400Regular,
  PTSans_700Bold,
} from '@expo-google-fonts/pt-sans';

import {
  PTSansCaption_400Regular,
  PTSansCaption_700Bold,
} from '@expo-google-fonts/pt-sans-caption';

import {useAssets} from 'expo-asset';

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [assets] = useAssets([require('./assets/splash.png')]);

  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSansCaption_400Regular,
    PTSans_700Bold,
    PTSansCaption_700Bold,
  });

  useEffect(() => {
    fontsLoaded && assets && setAppIsReady(true);
  }, [fontsLoaded, assets]);

  if (!appIsReady) {
    return <AppBackground hasBg={false} />;
  }

  return (
    <NavigationWrapped>
      <ThemeProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </NavigationWrapped>
  );
};

export default App;
