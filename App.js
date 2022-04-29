// Importamos as bibliotecas e componentes principais para nosso projeto 
import React, { Component } from 'react'; 
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

window.onload = function(){
  var seconds = 00;
  var tens = 00;
  var appendSeconds = document.getElementById("tens");
  var appendTens = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start") 
}
// Criamos a nossa classe App para renderizar nosso projeto 
class App extends Component { 
  render() { 
    // Caminho URI da nossa imagem 
    let logoURI = "https://img.icons8.com/glyph-neue/344/stopwatch.png"; 

    // Array de imagens
    // Esse array ira inserir a mesma imagem até o loop terminar
    let imagens = []
    for (let i=0; i < 1; i++) {
      imagens.push(<Image style = {{width:380, height:450, margin: 5}} source = {{uri: logoURI}} /> )
    }
    return ( 
      <ScrollView>
        {/* Area que será utilizada pelo nosso conteúdo */}
        <View>
          
            {/* Inserindo textos e estilizando */} 
            <Text style={{fontSize: 20, textTransform: 'uppercase'}}></Text> 
            <Text style={{color: 'black', fontSize: 20, textTransform: 'uppercase', textAlign: 'center', paddingTop: 50}}>Cronometro Digital</Text> 
            <Text style={{}}></Text> 

            {/*ScrollView com rolagem horizontal*/}
            <ScrollView>
              {/* Chamada do Array que ira inserir as imagens vezes */}
              {imagens}
            </ScrollView>
            <Text style={{color: 'black', fontSize: 20, textTransform: 'uppercase', textAlign: 'center', paddingTop: 30}}>oi</Text>
            {/* Chamada do Array que ira inserir as imagens vezes */}
        </View> 
      </ScrollView>
    ) 
    }
  }

  // Informamos qual classe será renderizada no aplicativo 
  export default App;

            