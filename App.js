// Importamos as bibliotecas e componentes principais para nosso projeto 
import React, { Component } from 'react'; 
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { form } from '../cronometroAPP/index'

// Criamos a nossa classe App para renderizar nosso projeto 
class App extends Component { 
  render() { 
    // Caminho URI da nossa imagem 
    let logoURI = "https://img.icons8.com/glyph-neue/344/stopwatch.png"; 

    // Array de imagens
    // Esse array ira inserir a mesma imagem até o loop terminar
    let imagens = []
    for (let i=0; i < 1; i++) {
      imagens.push(<Image style = {{width:340, height:400, margin: 5}} source = {{uri: logoURI}} /> )
    }
    return ( 
      <ScrollView>
        {/* Area que será utilizada pelo nosso conteúdo */}
        <View style={form.container}>
          
            {/* Inserindo textos e estilizando */} 
            <Text style={{fontSize: 20, textTransform: 'uppercase'}}></Text> 
            <Text style={{color: 'black', fontSize: 20, textTransform: 'uppercase', textAlign: 'center', paddingTop: 50}}>Cronometro Digital</Text> 
            <Text style={{}}></Text> 

            {/*ScrollView com rolagem horizontal*/}
            <ScrollView>
              {/* Chamada do Array que ira inserir as imagens vezes */}
              {imagens}
            </ScrollView>
            {/* Chamada do Array que ira inserir as imagens vezes */}
            <Button style={form.botao} title='Vai!'></Button><Button style={form.botao} color={'black'} title='Salvar e Zerar'></Button>
            {/* Chamada do Array que ira inserir as imagens vezes */}
              
        </View> 
      </ScrollView>
    ) 
    }
  }

  // Informamos qual classe será renderizada no aplicativo 
  export default App;

            