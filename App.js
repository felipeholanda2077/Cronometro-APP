import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { form } from '../cronometroAPP/index'

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

    let txtH = this.formatar(this.state.horas);
    let txtM = this.formatar(this.state.minutos);
    let txtS = this.formatar(this.state.segundos);

    let txtVolta =
    'Volta [' +
    (this.state.voltas.length + 1) +
    '] ' +
    ' -------- ' +
    txtH +
    ':' +
    txtM +
    ':' +
    txtS +
    '\n';
    

    this.state.voltas.push(txtVolta);
    this.forceUpdate();
  }
  registro() {
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
      this.state.voltas.push(' ------------------------------------ \n');
    }
  }



  render() {

    var txtH = this.formatar(this.state.horas);
    var txtM = this.formatar(this.state.minutos);
    var txtS = this.formatar(this.state.segundos);

    let logoURI = "https://img.icons8.com/glyph-neue/344/stopwatch.png";
    let HomemURI = "https://www.pngplay.com/wp-content/uploads/2/Running-Man-PNG-Clipart-Background.png";

    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ width: 340, height: 400, margin: 5 }} source={{ uri: logoURI }} />)
    }
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ position: "absolute", left: 189, top: 200, width: 190, height: 210, margin: 5 }} source={{ uri: HomemURI }} />)
    }


    return (
      <ScrollView>
        <View style={form.container}>

          <Text style={{ fontSize: 20, textTransform: 'uppercase' }}></Text>
          <Text style={{ color: 'black', fontSize: 20, textTransform: 'uppercase', textAlign: 'center', paddingTop: 10 }}>Cronometro Digital</Text>

          <ScrollView>
            {imagens}
          </ScrollView>

          <Text style={{ textAlign: "center", fontSize: 50 }}>{txtH}:{txtM}:{txtS}</Text>

          <View>
            <Button style={{ paddingTop: 10 }} color={"black"}
              onPress={(this.state.ativo ? this.pararRelogio : this.iniciaRelogio)} title={(this.state.ativo ? 'Pausar' : 'Começar')} />

            <Text style={{ textAlign: "center", fontSize: 10 }}></Text>

            <Button paddingTop={50} color={'black'} onPress={this.marcarVolta} title='Marcar Volta'></Button>

            <Text style={{ textAlign: "center", fontSize: 10 }}></Text>

            <Button style={{ paddingTop: 10 }} color={"black"} onPress={this.zerarRelogio} title='Zerar' />
          </View>
          <View>
          <Text style={{textAlign: "left", left: 90}}>Nº Registro</Text>
          <Text style={{position: "absolute", left: 195}}>Tempo</Text>
          <Text style={{left: 100,  textAlign: "left"}}>
              {this.state.voltas}
            </Text>

          </View>

          <Text style={{ textAlign: "center", fontSize: 13, paddingTop: 100 }}>© Felipe Holanda - Atividades Ágeis</Text>

        </View>
      </ScrollView>
    )
  }
}

export default App;


