import * as React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '~/styles';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import Routes from './src/routes/Routes';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
