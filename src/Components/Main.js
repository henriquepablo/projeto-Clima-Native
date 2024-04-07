import React, { Component, useState } from "react";
import {Text, View, Image } from "react-native";

import styles from "../styles/styleBody";
import DayWeek from "./DayWeek";
import Header from "./Header";

export default class Main extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      segunda: {day: '', max: 0, min: 0, rain: 0},
      terca: {day: '', max: 0, min: 0, rain: 0},
      quarta: {day: '', max: 0, min: 0, rain: 0},
      quinta: {day: '', max: 0, min: 0, rain: 0},
      sexta: {day: '', max: 0, min: 0, rain: 0},
      sabado: {day: '', max: 0, min: 0, rain: 0},
      domingo: {day: '', max: 0, min: 0, rain: 0},
      today: '',
      temp: 0,
      description: '',
      windSpeed: '',
      humidity: 0,
      percentRainToday: 0,
      cloudiness: 0,
      city: '',
      hour: 0
    }
  }

  loadInfoClima = () => {
    fetch("https://api.hgbrasil.com/weather?key=4eae4c2d")
    .then(response => response.json())
    .then(json => {

        const nextdays = json.results.forecast;
        
        this.setState({today: json.results.forecast[0].weekday});
        this.setState({temp: json.results.temp});
        this.setState({description: json.results.description});
        this.setState({windSpeed: json.results.wind_speedy});
        this.setState({humidity: json.results.humidity});
        this.setState({percentRainToday: json.results.forecast[0].rain_probability});
        this.setState({cloudiness: json.results.cloudiness});
        this.setState({city: json.results.city_name});
        this.setState({hour: json.results.time});

        for (let i = 0; i < 7; i++) {
          if (nextdays[i].weekday == "Seg") {
            this.setState({segunda: {
              ...this.state.segunda, day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability
            }});
          }
          else if (nextdays[i].weekday == "Ter") {
            this.setState({terca: {
              ...this.state.terca, day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability
            }});
          }
          else if (nextdays[i].weekday == "Qua") {
            this.setState({quarta: {
              ...this.state.quarta, day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability
            }});
          }
          else if (nextdays[i].weekday == "Qui") {
            this.setState({quinta: {
              ...this.state.quinta, day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability
            }});
          }
          else if (nextdays[i].weekday == "Sex") {
            this.setState({sexta: {
              ...this.state.sexta, day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability
            }});
          }
          else if (nextdays[i].weekday == "Sáb") {
            this.setState({sabado: {
              ...this.state.sabado, day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability
            }});
          }
          else if (nextdays[i].weekday == "Dom") {
            this.setState({domingo: {
              ...this.state.domingo, day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability
            }});
          }
        }
        
      });
  }
  componentDidMount() {
    this.loadInfoClima();
  }
  render() {
    return(
      <View>

        <Header city={this.state.city} hour={this.state.hour}/>


      <View style={styles.containerBody}>
        <Image source={require('../img/sol.png')} />

        <Text style={styles.textTemperatura}>{this.state.temp}°C</Text>

        <Text style={styles.descriptionDay}>{this.state.description}</Text>

        <View style={styles.viewCardBody}>
          
          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/wind.png')}/>
              <Text style={styles.textCard}>{this.state.windSpeed}</Text>
            </View>
           
            <Text style={styles.textCard}>Vel. do Vento</Text>
        
          </View>

          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/drop.png')}/>
              <Text style={styles.textCard}>{this.state.humidity} %</Text>
            </View>
           
            <Text style={styles.textCard}>Umidade</Text>
        
          </View>

          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/rainWhite.png')}/>
              <Text style={styles.textCard}>{this.state.percentRainToday} %</Text>
            </View>
           
            <Text style={styles.textCard}>% de chuva</Text>
        
          </View>

          <View style={styles.card}>
           
            <View style={styles.cardWithImage}>
              <Image source={require('../img/eye.png')}/>
              <Text style={styles.textCard}>{this.state.cloudiness} km</Text>
            </View>
           
            <Text style={styles.textCard}>Nebulosidade</Text>
        
          </View>

          <View style={styles.viewNextDays}>
            <DayWeek 
              weekday={this.state.segunda.day == this.state.today ? "Hoje": "Segunda-Feira"} 
              percentRain = {this.state.segunda.rain}
              tempMax={this.state.segunda.max}
              tempMin={this.state.segunda.min}
              />

            <DayWeek 
              weekday={this.state.terca.day == this.state.today ? "Hoje": "Terça-Feira"} 
              percentRain = {this.state.terca.rain}
              tempMax={this.state.terca.max}
              tempMin={this.state.terca.min}
              />

            <DayWeek 
              weekday={this.state.quarta.day == this.state.today ? "Hoje": "Quarta-Feira"} 
              percentRain = {this.state.quarta.rain}
              tempMax={this.state.quarta.max}
              tempMin={this.state.quarta.min}
              />

            <DayWeek 
              weekday={this.state.quinta.day == this.state.today ? "Hoje": "Quinta-Feira"} 
              percentRain = {this.state.quinta.rain}
              tempMax={this.state.quinta.max}
              tempMin={this.state.quinta.min}
              />

            <DayWeek 
              weekday={this.state.sexta.day == this.state.today ? "Hoje": "Sexta-Feira"} 
              percentRain = {this.state.sexta.rain}
              tempMax={this.state.sexta.max}
              tempMin={this.state.sexta.min}
              />

            <DayWeek 
              weekday={this.state.sabado.day == this.state.today ? "Hoje": "Sábado"} 
              percentRain = {this.state.sabado.rain}
              tempMax={this.state.sabado.max}
              tempMin={this.state.sabado.min}
              />
            
            <DayWeek 
              weekday={this.state.domingo.day == this.state.today ? "Hoje": "Domingo"} 
              percentRain = {this.state.domingo.rain}
              tempMax={this.state.domingo.max}
              tempMin={this.state.domingo.min}
              />
          </View>
        
        </View>
      </View>
    </View>
    );
  }
}

