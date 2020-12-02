import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer,useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Listar from './componentes/listar';
import Detalle from './componentes/detalle';

const Stack = createStackNavigator();

export const screens={
  lista: "Listado de Productos",
  detalle: "Detalle de Producto",
}

const App = () => {
  return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content"/>
        <Stack.Navigator>
          <Stack.Screen name={screens.lista} component={Listar}/>
          <Stack.Screen name={screens.detalle} component={Detalle}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
