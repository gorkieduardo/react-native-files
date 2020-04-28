/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Modelo = ({item, eliminarModelos}) => {
  const dialogoEliminar = (id) => {
    eliminarModelos(id);
  };
  return (
    <View style={styles.fondo}>
      <View>
        <Text style={styles.label}>Nombrel del modelo</Text>
        <Text style={styles.texto}>{item.nombre}</Text>
      </View>
      <View>
        <Text style={styles.label}>Función Matemáticas</Text>
        <Text style={styles.texto}>{item.funcion}</Text>
      </View>
      <View>
        <Text style={styles.label}>Ejemplo: </Text>
        <Text style={styles.texto}>
          {item.ejemplo} {item.operacion}
        </Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(item.id)}
          style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  texto: {
    fontSize: 15,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Modelo;
