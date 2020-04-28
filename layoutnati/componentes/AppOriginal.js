/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import Header from './Header';
import Footer from './Footer';
//import Portada from './componentes/Portada';

//TODO: react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={require('../assets/images/gueportada.jpg')}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Galería del Güegüese</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={require('../assets/images/guegue1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('../assets/images/guegue2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('../assets/images/guegue3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('../assets/images/guegue4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('../assets/images/guegue5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Personajes del Güegüese</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require('../assets/images/guegue5.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('../assets/images/guegue4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('../assets/images/guegue3.jpg')}
              />
            </View>
          </View>
          <Text style={styles.titulo}>Pesonajes centrales</Text>
          <View style={styles.listado}>
            <View style={styles.listadoi}>
              <Image
                style={styles.mejores}
                source={require('../assets/images/guegue1.jpg')}
              />
              <Text>El Güegüense, protagonista</Text>
            </View>
            <View style={styles.listadoi}>
              <Image
                style={styles.mejores}
                source={require('../assets/images/guegue2.jpg')}
              />
              <Text>El Güegüense de perfil</Text>
            </View>
            <View style={styles.listadoi}>
              <Image
                style={styles.mejores}
                source={require('../assets/images/guegue3.jpg')}
              />
              <Text>El Alguacil Mayor</Text>
            </View>
            <View style={styles.listadoi}>
              <Image
                style={styles.mejores}
                source={require('../assets/images/guegue4.jpg')}
              />
              <Text>Gobernador Tastuanes</Text>
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
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
