// Importamos as bibliotecas e componentes principais para nosso projeto 
import React, { Component } from 'react'; 
import { View, Text, Button, Image, ScrollView} from 'react-native';
import { Component } from 'react';
import { form } from '../cronometroAPP/index'

class MO extends Component {
  constructor(props){
    super(props);

    this.state = {
      horas: 0,
      minutos: 0,
      segundos: 0,
      ativo: false,
      voltas: []
    }
    pulsoDeClock = this.pulsoDeClock.bind(this);
    iniciaRelogio = this.iniciaRelogio.bind(this);
    pararRelogio = this.pararRelogio.bind(this);
    marcarVolta = this.marcarVolta.bind(this);
    zerarRelogio = this.zerarRelogio.bind(this);
  }

  iniciaRelogio() {
    if(!this.state.ativo){
      this.setState({clock : setInterval(this.pulsoDeClock,1000)});
      this.setState({ativo: true})
    }
  }

  pulsoDeClock() {
    var h = this.state.horas;
    var m = this.state.minutos;
    var s = this.state.segundos;

    if(s<59){
      s++;
    }else {
      s = 0;
      if(m < 59){
        m++;
      }else{
        m = 0;
        h++;
      }
    }

    this.setState({segundos: s, minutos: m, horas: h})
  }

  pararRelogio(){
    if(this.state.ativo){
      clearInterval(this.state.clock);
      this.setState({ativo:false});
    }
  }

  marcarVolta(){
    var txtDoCronometro = this.formatar(this.state.horas) + 
    ":" + this.formatar(this.state.minutos) + 
    ":" + this.formatar(this.state.segundos);

  }
}

// Criamos a nossa classe App para renderizar nosso projeto 
class App extends Component { 
  render() { 
    // Caminho URI da nossa imagem 
    let logoURI = "https://img.icons8.com/glyph-neue/344/stopwatch.png";
    let HomemURI = "https://www.pngplay.com/wp-content/uploads/2/Running-Man-PNG-Clipart-Background.png";

    // Array de imagens
    // Esse array ira inserir a mesma imagem até o loop terminar
    let imagens = []
    for (let i=0; i < 1; i++) {
      imagens.push(<Image style = {{width:340, height:400, margin: 5}} source = {{uri: logoURI}} /> )
    }
    for (let i=0; i < 1; i++) {
      imagens.push(<Image style = {{ position: "absolute", left: 189, top: 200, width:190, height:210, margin: 5}} source = {{uri: HomemURI}} /> )
    }
    return ( 
      <ScrollView>
        {/* Area que será utilizada pelo nosso conteúdo */}
        <View style={form.container}>
          
            {/* Inserindo textos e estilizando */} 
            <Text style={{fontSize: 20, textTransform: 'uppercase'}}></Text> 
            <Text style={{color: 'black', fontSize: 20, textTransform: 'uppercase', textAlign: 'center', paddingTop: 10}}>Cronometro Digital</Text> 
             

            {/*ScrollView com rolagem horizontal*/}
            <ScrollView>
              {/* Chamada do Array que ira inserir as imagens vezes */}
              {imagens}
            </ScrollView>

            <Text style={{textAlign: "center",fontSize: 100}}>00.00s</Text>
            {/* Chamada do Array que ira inserir as imagens vezes */}
            <Button style={{paddingTop: 10}} color={"black"} title='Vai!'></Button><Text style={{textAlign: "center",fontSize: 10}}></Text><Button paddingTop={50} color={'black'} title='Salvar e Zerar'></Button>
            {/* Chamada do Array que ira inserir as imagens vezes */}

            <Text style={{textAlign: "center",fontSize: 13, paddingTop: 100}}>© Felipe Holanda - Atividades Ágeis</Text>
              
        </View> 
      </ScrollView>
    ) 
    }
  }

  // Informamos qual classe será renderizada no aplicativo 
  export default App;

  
            