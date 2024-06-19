import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import UserShares from '../screens/UserShares/UserShares';
import ActionsForPurchaseScreen from '../screens/ActionsForPurchaseScreen/ActionsForPurchaseScreen';
import TransactionsScreen from '../screens/TransactionsScreen/TransactionsScreen';
import SellFormScreen from '../screens/SellFormScreen/SellFormScreen';
import BuyFormScreen from '../screens/BuyFormScreen/BuyFormScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserShares" component={UserShares} options={{ title: 'Minhas Ações' }} />
      <Stack.Screen name="ActionsForPurchaseScreen" component={ActionsForPurchaseScreen} options={{ title: 'Ações Para Compra' }} />
      <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} options={{ title: 'Transações' }} />
      <Stack.Screen name="SellFormScreen" component={SellFormScreen}  options={{ title: 'Vender' }}/>
      <Stack.Screen name="BuyFormScreen" component={BuyFormScreen} options={{ title: 'Comprar' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
