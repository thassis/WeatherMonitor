import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './src/redux/reducers';

const store = createStore(rootReducer);

import Splash from './src/screens/SplashScreen/Splash';
import ListCities from './src/screens/ListCitiesScreen/ListCities';
import DetailsCity from './src/screens/DetailsCityScreen/DetailsCity';
import Search from './src/screens/SearchScreen/Search';

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './src/utils/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={colors.white} barStyle='dark-content' />

          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}

          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="ListCities" component={ListCities} />
            <Stack.Screen name="DetailsCity" component={DetailsCity} />
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>

        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
