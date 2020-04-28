/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Animated, Platform} from 'react-native';

const Footer = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1,
      duration: 1500,
    }).start();
  }, []);

  return (
    <Animated.View
      sytle={{
        opacity: animacion,
      }}>
      <Text style={styles.texto}>
        Versión nararrita de Eduardo Estrada Montenegro
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  texto: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    // fontFamily: 'Lato-Black',
    backgroundColor: 'green',
    paddingBottom: 10,
    //textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    marginBottom: 1,
  },
});

export default Footer;
