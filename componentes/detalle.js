import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

const Detalle = () =>{ 
    const navigator = useNavigation();
    return(
      <View>
        <Text>Detalle</Text>
        <Button
          title="Volver"
          onPress={()=>navigator.goBack()}
        />

      </View>
    );
}

export default Detalle;