import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native'
import {screens} from '../App'

const Listar = () =>{
    const navigator = useNavigation();
    return(
      <View style={styles.container}>
        <Text>Listar</Text>
        <Button
          title={'Ir a segunda pantalla'}
          onPress={()=>navigator.navigate(screens.detalle)}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});

export default Listar;