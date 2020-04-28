/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import AppOriginal from './componentes/AppOriginal';

//TODO: react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Autor from './componentes/Autor';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            title: 'El Güegüense',
            headerStyle: {
              backgroundColor: '#F4511E',
            },
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="Encabezado" component={Header} />
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Inferior" component={Footer} />
          <Stack.Screen name="Principal" component={AppOriginal} />
          <Stack.Screen name="Autor" component={Autor} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 250,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoi: {
    flexBasis: '49%',
  },
});

export default App;
