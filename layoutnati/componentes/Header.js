/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Animated, Platform} from 'react-native';

const Header = ({navigation}) => {
  const volver = () => {
    navigation.navigate('Encabezado');
  };

  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 20,
      duration: 1000,
    }).start();
  }, []);

  return (
    <View
      sytle={{
        opacity: animacion,
      }}>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
        Las Picardías del Güegüense
      </Animated.Text>
      <Button title="Volver" onPress={() => volver}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    fontFamily: 'Lato-Black',
    backgroundColor: 'green',
    paddingBottom: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginBottom: 1,
  },
});

export default Header;
