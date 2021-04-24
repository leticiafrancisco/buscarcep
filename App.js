import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';


export default class App extends React.Component{


  state={
    cep:'',
    informacoes: {
      logradouro: '',
      bairro:'',
      localidade:'',
      uf:'',
    }
  };
  
  
  buscarCep = () =>{  
   
    axios.get(`https://viacep.com.br/ws/${this.state.cep}/json`)
    .then(responde => {
          
      this.setState({
        informacoes: responde.data
      })
    })
  }



  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Digite o CEP:</Text>
        <TextInput 
          valeu = {this.state.cep}
          onChangeText={cep =>{this.setState({cep})}}
          style={styles.input}
          placeholder='Ex: 06665305'
        />
        
        <TouchableOpacity style = {styles.button} onPress ={this.buscarCep}>
          <Text style={styles.buttontxt}>Buscar</Text>
        </TouchableOpacity>

        <View style={styles.endereco}>
          <Text>Logradouro: {this.state.informacoes.logradouro}</Text>
          <Text>Bairro: {this.state.informacoes.bairro}</Text>
          <Text>Cidade: {this.state.informacoes.localidade}</Text>
          <Text>UF: {this.state.informacoes.uf}</Text>
        </View>

      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#aaaa',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 30,

  },
  texto: {
    fontSize: 30,
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 15,
    margin:10,
    width: 300,
  },
  button:{
    paddingVertical: 15,
    paddingHorizontal:30,
    padding: 10,
    backgroundColor: '#ffb444',
    borderRadius: 20,
    
  },
  buttontxt:{
    fontWeight: 'bold',
    color:'#ffff'

  },
  endereco:{
    borderWidth: 3,
    borderColor: '#ffb444',
    borderRadius: 30,
    width: 350,
    padding: 20,
    marginTop: 45,
  }
})