/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Animated, Platform} from 'react-native';

const Portada = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View
      sytle={[
        styles.Image,
        {
          width: animacion,
          height: animacion,
        },
      ]}>
      <View>
        <Image
          style={styles.Image}
          source={require('../assets/images/gueportada.jpg')}
        />
      </View>
    </Animated.View>
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
  banner: {
    width: 100,
    height: 100,
  },
});

export default Portada;
