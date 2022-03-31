import * as React from 'react';
import { Text,TextInput, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default function App() {
  const [count, setCount] = React.useState(0);
  const onPress = () => handlechange();
  this.myTextInput = React.createRef();
  const handlechange  = () =>{
    setCount(count+1)
    this.myTextInput.current.clear();
  }
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>
        Grupo Numero: 04
    </Text>
    <Text style={styles.integrantes}>
      <p>Alexander Rodrigo Calderon Eguiluz</p>
      <p>Jose Carlos Falconi Valdivia</p>
      <p>Cesar Limachi Flores</p>
      <p>Guido Lucana Lopez </p>
      <p>Carlos Felipe Sivincha Fernandez</p>
      <p>Luis Johan Rivera Gonzales</p>
      <p>Mario Raid Villanueva Linares</p>
      <p>Joaquin Salas Quintanilla</p>
    </Text>
      <Image style={{width:180,height:180,alignSelf:'center',borderRadius:30}} source={require('./assets/fotos600.jpg')}/>
      <View style={styles.countContainer}>
      <TextInput
       ref={this.myTextInput}
       style={{
          height: 30,
          borderColor: 'red',
          borderRadius: 10,
          backgroundColor:'white',
          borderWidth: 2
        }}
      />
        <Text style={styles.cont}><b>Count: {count}</b></Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text><b>Guardar</b></Text>
      </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
    padding: 8,
  },
  countContainer: {
    alignItems: "center",
    color: 'red',
    padding: 10
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red'
  },
  cont: {
    color: 'red',
    fontSize: 20,
  },
  integrantes: {
    margin: 6,
    fontSize: 14,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'time'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#04B404",
    padding: 10
  },
});
