import React, { Component } from "react";
import {Text, View, Image } from "react-native";

import styles from "../styles/styleBody";

export default class Body extends Component{
  render() {
    return(
      <View style={styles.containerBody}>
        <Image source={require('../img/sol.png')} />
        
        <Text style={styles.textTemperatura}>{this.props.temp}°C</Text>

        <Text style={styles.descriptionDay}>{this.props.description}</Text>

        <View style={styles.viewCardBody}>
          
          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/wind.png')}/>
              <Text style={styles.textCard}>{this.props.windSpeed}</Text>
            </View>
           
            <Text style={styles.textCard}>Vel. do Vento</Text>
        
          </View>

          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/drop.png')}/>
              <Text style={styles.textCard}>{this.props.umidade} %</Text>
            </View>
           
            <Text style={styles.textCard}>Umidade</Text>
        
          </View>

          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/rainWhite.png')}/>
              <Text style={styles.textCard}>{this.props.percentRainToday} %</Text>
            </View>
           
            <Text style={styles.textCard}>% de chuva</Text>
        
          </View>

          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/eye.png')}/>
              <Text style={styles.textCard}>{this.props.visibilidade} km</Text>
            </View>
           
            <Text style={styles.textCard}>Nebulosidade</Text>
        
          </View>

          <View style={styles.viewNextDays}>
            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.segunda ? "Hoje" : "Segunda-Feira"}</Text>
              <Image source={require('../img/rain.png')}/>
              <Text style={styles.percentRain}>{this.props.percentRainSeg}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMaxSeg}°C</Text>
              <Text style={styles.temp}>{this.props.tempMinSeg}°C</Text>
            </View>

            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.terca ? "Hoje" : "Terça-Feira"}</Text>
              <Image source={require('../img/rain.png')}/>
              <Text style={styles.percentRain}>{this.props.percentRainTer}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMaxTer}°C</Text>
              <Text style={styles.temp}>{this.props.tempMinTer}°C</Text>
            </View>

            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.quarta ? "Hoje" : "Quarta-Feira"}</Text>
              <Image source={require('../img/rain.png')}/>
              <Text style={styles.percentRain}>{this.props.percentRainQua}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMaxQua}°C</Text>
              <Text style={styles.temp}>{this.props.tempMinQua}°C</Text>
            </View>

            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.quinta ? "Hoje" : "Quinta-Feira"}</Text>
              <Image source={require('../img/rain.png')}/>
              <Text style={styles.percentRain}>{this.props.percentRainQui}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMaxQui}°C</Text>
              <Text style={styles.temp}>{this.props.tempMinQui}°C</Text>
            </View>

            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.sexta ? "Hoje" : "Sexta-Feira"}</Text>
              <Image source={require('../img/rain.png')} style={styles.alignICon}/>
              <Text style={styles.percentRain}>{this.props.percentRainSex}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMaxSex}°C</Text>
              <Text style={styles.temp}>{this.props.tempMinSex}°C</Text>
            </View>

            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.sabado ? "Hoje" : "Sábado"}</Text>
              <Image source={require('../img/rain.png')} style={styles.alignICon}/>
              <Text style={styles.percentRain}>{this.props.percentRainSab}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMaxSab}°C</Text>
              <Text style={styles.temp}>{this.props.tempMinSab}°C</Text>
            </View>

            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.domingo ? "Hoje" : "Domingo"} </Text>
              <Image source={require('../img/rain.png')} style={styles.alignIConDomingo}/>
              <Text style={styles.percentRain}>{this.props.percentRainDomingo}%</Text>
              <Image source={require('../img/cloud-sun.png')} />
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMaxDomingo}°C</Text>
              <Text style={styles.temp}>{this.props.tempMinDomingo}°C</Text>
            </View>

          </View>
        
        </View>
      </View>
    );
  }
}

