/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Autor = ({navigation, route}) => {
  const {nombre, oficio} = route.params;

  const volverPag = () => {
    navigation.navigate('Inicio');
  };
  return (
    <View style={styles.contenedor}>
      <Text>
        {nombre}
        {oficio}
      </Text>
      <Button title="Volver a Inicio" onPress={() => volverPag()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Autor;
