import React, {useState, useContext, useEffect } from "react";
import {Text, View, Image, ScrollView} from "react-native";

import styles from "../styles/styleMain";
import DayWeek from "./DayWeek";
import Header from "./Header";
import Loading from "./Loading";
import MyContext from "./Context";
import LinearGradient from "react-native-linear-gradient";

let pathImage = '';
export default function Main(props){
  
  const {cityName} = useContext(MyContext);
  const [segunda, setSegunda] = useState({day: '', max: 0, min: 0, rain: 0});
  const [terca, setTerca] = useState({day: '', max: 0, min: 0, rain: 0});
  const [quarta, setQuarta] = useState({day: '', max: 0, min: 0, rain: 0});
  const [quinta, setQuinta] = useState({day: '', max: 0, min: 0, rain: 0});
  const [sexta, setSexta] = useState({day: '', max: 0, min: 0, rain: 0});
  const [sabado, setSabado] = useState({day: '', max: 0, min: 0, rain: 0});
  const [domingo, setDomingo] = useState({day: '', max: 0, min: 0, rain: 0});
  const [today, setToday] = useState('');
  const [loading, setLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [percentRainToday, setPercentRainToday] = useState(0);
  const [cloudiness, setCloudiness] = useState(0);
  const [city, setCity] = useState('');
  const [hour, setHour] = useState('');

  useEffect(() => {
      fetch(`https://api.hgbrasil.com/weather?key=2b97e02e&city_name=${cityName}`)
      .then(response => response.json())
      .then(json => {
        
        if (json.results.currently == "noite" && json.results.condition_slug == "clear_night") {
          pathImage = require('../img/noite_limpa.png');
        }
        else if (json.results.currently == "dia" && json.results.condition_slug == "clear_day") {
          pathImage = require('../img/clear_day.png');
        }
        else if (json.results.currently == "dia" && json.results.condition_slug == "fog" || json.results.currently == "dia" && json.results.condition_slug == "cloudly_night") {
          pathImage = require('../img/cloudiness.png');
        }
        else if (json.results.currently == "tarde" && json.results.condition_slug == "fog" || json.results.currently == "tarde" && json.results.condition_slug == "cloudly_night") {
          pathImage = require('../img/cloudiness.png');
        }
        else if (json.results.currently == "noite" && json.results.condition_slug == "fog" || json.results.currently == "noite" && json.results.condition_slug == "cloudly_night") {
          pathImage = require('../img/cloudiness.png');
        }
        
        const nextdays = json.results.forecast;
        
        setToday(json.results.forecast[0].weekday);

        setTemp(json.results.temp);
        setDescription(json.results.description);
        setWindSpeed(json.results.wind_speedy);
        setHumidity(json.results.humidity);
        setPercentRainToday(json.results.forecast[0].rain_probability);
        setCloudiness(json.results.cloudiness);
        setCity(json.results.city_name);
        setHour(json.results.time);
        
        for (let i = 0; i < 7; i++) {
          if (nextdays[i].weekday == "Seg") {
            setSegunda({day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability});
          }
           else if (nextdays[i].weekday == "Ter") {
            setTerca({day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability});
          }
           else if (nextdays[i].weekday == "Qua") {
            setQuarta({day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability});
          }
          else if (nextdays[i].weekday == "Qui") {
            setQuinta({day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability});;
          }
          else if (nextdays[i].weekday == "Sex") {
            setSexta({day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability});;
          }
          else if (nextdays[i].weekday == "Sáb") {
            setSabado({day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability});
          }
          else if (nextdays[i].weekday == "Dom") {
            setDomingo({day: nextdays[i].weekday, max: nextdays[i].max, min: nextdays[i].min, rain: nextdays[i].rain_probability});
          }
        }
        
          setLoading(false);
          console.log(cityName)
        });
  }, [cityName]);

    if (loading) {
      return(
        <Loading />
      ); 
    }

    else {
      return(
        <View>
          <LinearGradient colors={['#5CBCDB', '#0096C7', '#0054B6', '#01377C']} start={{x:0.5, y:0}}>
          <ScrollView>
          <Header city={city} hour={hour}/>


        <View style={styles.containerBody}>
          
          <Image source={pathImage} />

          <Text style={styles.textTemperatura}>{temp}°C</Text>

          <Text style={styles.descriptionDay}>{description}</Text>

          <View style={styles.viewCardBody}>
            
            <View style={styles.card}>
            
              <View style={styles.cardWithImage}>
                <Image source={require('../img/wind.png')}/>
                <Text style={styles.textCard}>{windSpeed}</Text>
              </View>
            
              <Text style={styles.textCard}>Vel. do Vento</Text>
          
            </View>

            <View style={styles.card}>
            
              <View style={styles.cardWithImage}>
                <Image source={require('../img/drop.png')}/>
                <Text style={styles.textCard}>{humidity} %</Text>
              </View>
            
              <Text style={styles.textCard}>Umidade</Text>
          
            </View>

            <View style={styles.card}>
            
              <View style={styles.cardWithImage}>
                <Image source={require('../img/rainWhite.png')}/>
                <Text style={styles.textCard}>{percentRainToday} %</Text>
              </View>
            
              <Text style={styles.textCard}> de chuva</Text>
          
            </View>

            <View style={styles.card}>
            
              <View style={styles.cardWithImage}>
                <Image source={require('../img/eye.png')}/>
                <Text style={styles.textCard}>{cloudiness} km</Text>
              </View>
            
              <Text style={styles.textCard}>Nebulosidade</Text>
          
            </View>

            <View style={styles.viewNextDays}>
              <DayWeek 
                weekday={segunda.day == today ? "Hoje": "Segunda-Feira"} 
                percentRain = {segunda.rain}
                tempMax={segunda.max}
                tempMin={segunda.min}
                />

              <DayWeek 
                weekday={terca.day == today ? "Hoje": "Terça-Feira"} 
                percentRain = {terca.rain}
                tempMax={terca.max}
                tempMin={terca.min}
                />

              <DayWeek 
                weekday={quarta.day == today ? "Hoje": "Quarta-Feira"} 
                percentRain = {quarta.rain}
                tempMax={quarta.max}
                tempMin={quarta.min}
                />

              <DayWeek 
                weekday={quinta.day == today ? "Hoje": "Quinta-Feira"} 
                percentRain = {quinta.rain}
                tempMax={quinta.max}
                tempMin={quinta.min}
                />

              <DayWeek 
                weekday={sexta.day == today ? "Hoje": "Sexta-Feira"} 
                percentRain = {sexta.rain}
                tempMax={sexta.max}
                tempMin={sexta.min}
                />

              <DayWeek 
                weekday={sabado.day == today ? "Hoje": "Sábado"} 
                percentRain = {sabado.rain}
                tempMax={sabado.max}
                tempMin={sabado.min}
                />
              
              <DayWeek 
                weekday={domingo.day == today ? "Hoje": "Domingo"} 
                percentRain = {domingo.rain}
                tempMax={domingo.max}
                tempMin={domingo.min}
                /> 
            </View>
          
          </View>
        </View>
        </ScrollView>
        </LinearGradient>
      </View>
      );
    }
}

