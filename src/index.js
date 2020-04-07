
import React from 'react';
import Main from './components/Main'
import AddTransaction from './components/AddTransaction'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => (
    // <MainNavigation />
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" headerMode="none">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="AddTransaction" component={AddTransaction} />
        </Stack.Navigator>
    </NavigationContainer>
    //   <Provider store={store}>
    //   </Provider>
);
export default App;

