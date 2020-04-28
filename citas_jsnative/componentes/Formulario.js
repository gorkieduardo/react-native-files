/* eslint-disable prettier/prettier */

import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import shortid from 'shortid';

const Formulario = ({modelos, setModelos, setMostrarForm}) => {
  const [nombre, setNombre] = useState('');
  const [funcion, setFuncion] = useState('');
  const [ejemplo, setEjemplo] = useState('');
  const [operacion, setOperacion] = useState('');

  const crearNuevoModelo = () => {
    //console.log('Crear nueva función...');
    //validar
    if (
      nombre.trim() === '' ||
      funcion.trim() === '' ||
      ejemplo.trim() === '' ||
      operacion.trim() === ''
    ) {
      mostrarAlerta();
      return;
    }
    //crear nueva cita
    const modelo = {nombre, funcion, ejemplo, operacion};
    modelo.id = shortid.generate();
    // console.log(modelo);
    const modeloNuevo = [...modelos, modelo];
    setModelos(modeloNuevo);

    //ocultar el formulario
    setMostrarForm(false);

    //reset formulario
  };

  //muestra alerta si falla validación
  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Nombre del Modelo</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setNombre(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Función matemática</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setFuncion(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Ejemplo</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setEjemplo(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Operación</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(texto) => setOperacion(texto)}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => crearNuevoModelo()}
            style={styles.btnSubmit}>
            <Text style={styles.textoSubmit}>Guardar Modelo </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Formulario;
