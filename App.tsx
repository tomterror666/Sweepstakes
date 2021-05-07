import React from 'react';
import { Main } from './src/screens/main';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MyTips } from './src/screens/my-tips';
import { MyWins } from './src/screens/my-wins';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import { AddTip } from './src/screens/add-tip';

const stackNav = createStackNavigator();
const store = configureStore();

export function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <stackNav.Navigator screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: 'center', }}>
        <stackNav.Screen name="Sweepstakes" component={Main} />
        <stackNav.Screen name="My Tips" component={MyTips} />
        <stackNav.Screen name="My Wins" component={MyWins} />
        <stackNav.Screen name="Add Tip" component={AddTip} />
      </stackNav.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
