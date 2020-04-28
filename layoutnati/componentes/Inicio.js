/* eslint-disable prettier/prettier */
//TODO: pasar informacion de Inicio => Autor
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Inicio = ({navigation}) => {
  const datosAutor = {
    autorId: 1,
    edadad: 59,
    nombre: 'Eduardo J. Estrada',
    oficio:
      'Escritor y desarrollador de aplicaciones educativas, Estrada ha escrito ' +
      'una diviersidad de libros sobre educación y las nuevas tecnologías',
  };
  const visitarAutor = () => {
    navigation.navigate('Autor', datosAutor);
  };
  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button title="Ir a Autor" onPress={() => visitarAutor()} />
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
export default Inicio;
