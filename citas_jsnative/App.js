import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

import Modelo from './componentes/Modelo';
import Formulario from './componentes/Formulario';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);

  //definir el state de Modelos
  const [modelos, setModelos] = useState([
    {
      id: '1',
      nombre: 'Intrés simple',
      funcion: 'El modelo de crecimineto simple está dado por I = P(t * i)',
      ejemplo: ' Una inversión de 5 000 al 10% anual es igual a',
      operacion: 5000 * 0.1 * 1,
    },
    {
      id: '2',
      nombre: 'Valor Futuro',
      funcion:
        'El Modelo de crecimiento exponencial se represetna por S = P(1+i)^n',
      ejemplo: 'Asi, 5 * 15 es igual a',
      operacion: '1000^1.20',
    },
    {
      id: '3',
      nombre: 'Valor Presente',
      funcion: 'El Modelo exponencial se representa por S = P/(1+i)^n',
      ejemplo: 'En un modelo exponencial 5x10 es igual a',
      operacion: 5 * 10,
    },
    {
      id: '4',
      nombre: 'Tasa efectiva',
      funcion:
        'Para obtener la tasa efectiva se solo con los exponentes de la función (1+i)^n',
      ejemplo:
        'Así por ejemplo, en 100(5,2), solo se trabaja con la tasa y el tiempo',
      operacion: (5, 2),
    },
  ]);

  //TODO: funcion que elimina itemes

  const eliminarModelos = (id) => {
    setModelos((modelosActuales) => {
      return modelosActuales.filter((modelo) => modelo.id !== id);
    });
  };
  //mostrar formulario
  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Modelos Financieros</Text>
        <View>
          <TouchableHighlight
            onPress={() => mostrarFormulario()}
            style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}>
              {mostrarForm ? 'Ver modelos' : 'Crea nuevo modelo'}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Intoduce los datos</Text>

              <Formulario
                modelos={modelos}
                setModelos={setModelos}
                setMostrarForm={setMostrarForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {modelos.length > 0 ? 'Modelos' : 'No hay modelos'}
              </Text>
              <FlatList
                style={styles.listado}
                data={modelos}
                renderItem={({item}) => (
                  <Modelo item={item} eliminarModelos={eliminarModelos} />
                )}
                keyExtractor={(modelo) => modelo.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
