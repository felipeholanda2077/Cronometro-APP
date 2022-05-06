// Importamos as bibliotecas e componentes principais para nosso projeto 
import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { form } from '../cronometroAPP/index'

// Criamos a nossa classe App para renderizar nosso projeto 
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      horas: 0,
      minutos: 0,
      segundos: 0,
      ativo: false,
      voltas: []
    }
    this.pulsoDeClock = this.pulsoDeClock.bind(this);
    this.iniciaRelogio = this.iniciaRelogio.bind(this);
    this.pararRelogio = this.pararRelogio.bind(this);
    this.marcarVolta = this.marcarVolta.bind(this);
    this.zerarRelogio = this.zerarRelogio.bind(this);
  }

  iniciaRelogio() {
    if (!this.state.ativo) {
      this.setState({ clock: setInterval(this.pulsoDeClock, 1000) });
      this.setState({ ativo: true })
    }
  }

  pulsoDeClock() {
    var h = this.state.horas;
    var m = this.state.minutos;
    var s = this.state.segundos;

    if (s < 59) {
      s++;
    } else {
      s = 0;
      if (m < 59) {
        m++;
      } else {
        m = 0;
        h++
      }
    }

    this.setState({ segundos: s, minutos: m, horas: h })
  }

  pararRelogio() {
    if (this.state.ativo) {
      clearInterval(this.state.clock);
      this.setState({ ativo: false });
    }
  }

  marcarVolta() {
    var txtDoCronometro = this.formatar(this.state.horas) + ":" + this.formatar(this.state.minutos) + ":" + this.formatar(this.state.segundos) + "\n";
    this.state.voltas.push(txtDoCronometro);
    this.forceUpdate();
  }
  formatar(t) {
    return (t < 10) ? "0" + t.toString() : t.toString();
  }

  zerarRelogio() {
    this.pararRelogio();
    this.setState({ segundos: 0, minutos: 0, horas: 0 });

    if (this.state.voltas.length > 0) {
      this.state.voltas.push(' ------- \n');
    }
  }



  render() {

    var txtH = this.formatar(this.state.horas);
    var txtM = this.formatar(this.state.minutos);
    var txtS = this.formatar(this.state.segundos);

    // Caminho URI da nossa imagem 
    let logoURI = "https://img.icons8.com/glyph-neue/344/stopwatch.png";
    let HomemURI = "https://www.pngplay.com/wp-content/uploads/2/Running-Man-PNG-Clipart-Background.png";

    // Array de imagens
    // Esse array ira inserir a mesma imagem até o loop terminar
    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ width: 340, height: 400, margin: 5 }} source={{ uri: logoURI }} />)
    }
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ position: "absolute", left: 189, top: 200, width: 190, height: 210, margin: 5 }} source={{ uri: HomemURI }} />)
    }


    return (
      <ScrollView>
        {/* Area que será utilizada pelo nosso conteúdo */}
        <View style={form.container}>

          {/* Inserindo textos e estilizando */}
          <Text style={{ fontSize: 20, textTransform: 'uppercase' }}></Text>
          <Text style={{ color: 'black', fontSize: 20, textTransform: 'uppercase', textAlign: 'center', paddingTop: 10 }}>Cronometro Digital</Text>

          {/*ScrollView com rolagem horizontal*/}
          <ScrollView>
            {/* Chamada do Array que ira inserir as imagens vezes */}
            {imagens}
          </ScrollView>

          <Text style={{ textAlign: "center", fontSize: 50 }}>{txtH}:{txtM}:{txtS}</Text>
          {/* Chamada do Array que ira inserir as imagens vezes */}
          <View>
            <Button style={{ paddingTop: 10 }} color={"black"}
              onPress={(this.state.ativo ? this.pararRelogio : this.iniciaRelogio)} title={(this.state.ativo ? 'Pausar' : 'Começar')} />

            <Text style={{ textAlign: "center", fontSize: 10 }}></Text>

            <Button paddingTop={50} color={'black'} onPress={this.marcarVolta} title='Marcar Volta'></Button>

            <Text style={{ textAlign: "center", fontSize: 10 }}></Text>

            <Button style={{ paddingTop: 10 }} color={"black"} onPress={this.zerarRelogio} title='Zerar' />
          </View>
          <View>
          <Text style={{textAlign: "left"}}>Nº Registro</Text>
          <Text style={{position: "absolute", left: 305}}>Tempo</Text>
          <Text style={{ textAlign: "left"}}>
              {this.state.voltas}
            </Text>
            <Text style={{ textAlign: "right", marginTop: -35 }}>
              {this.state.voltas}
            </Text>
          </View>

          <Text style={{ textAlign: "center", fontSize: 13, paddingTop: 100 }}>© Felipe Holanda - Atividades Ágeis</Text>

        </View>
      </ScrollView>
    )
  }
}


// Informamos qual classe será renderizada no aplicativo 
export default App;


