import React, { Component, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "./Header";
import Body from "./Body";
import LinearGradient from "react-native-linear-gradient";

const App = () =>{

  
  const [temperatura, setTemperatura] = useState(null);
  const [description, setDescription] = useState(null);
  const [cityName, setcityName] = useState(null);
  const [date, setDate] = useState(null);
  const [hour, setHour] = useState(null);
  const [sabado, setSabado] = useState(null);
  const [domingo, setDomingo] = useState(null);
  const [sexta, setSexta] = useState(null);
  const [quinta, setQuinta] = useState(null);
  const [quarta, setQuarta] = useState(null);
  const [terca, setTerca] = useState(null);
  const [segunda, setSegunda] = useState(null);
  const [tempMaxDomingo, setTempMaxDomingo] = useState(null);
  const [tempMinDomingo, setTempMinDomingo] = useState(null);
  const [percentRainDomingo, setPercentRainDomingo] = useState(null);
  const [tempMaxSeg, setTempMaxSeg] = useState(null);
  const [tempMinSeg, setTempMinSeg] = useState(null);
  const [percentRainSeg, setPercentRainSeg] = useState(null);
  const [tempMaxTer, setTempMaxTer] = useState(null);
  const [tempMinTer, setTempMinTer] = useState(null);
  const [percentRainTer, setPercentRainTer] = useState(null);
  const [tempMaxQua, setTempMaxQua] = useState(null);
  const [tempMinQua, setTempMinQua] = useState(null);
  const [percentRainQua, setPercentRainQua] = useState(null);
  const [tempMaxQui, setTempMaxQui] = useState(null);
  const [tempMinQui, setTempMinQui] = useState(null);
  const [percentRainQui, setPercentRainQui] = useState(null);
  const [tempMaxSex, setTempMaxSex] = useState(null);
  const [tempMinSex, setTempMinSex] = useState(null);
  const [percentRainSex, setPercentRainSex] = useState(null);
  const [tempMaxSab, setTempMaxSab] = useState(null);
  const [tempMinSab, setTempMinSab] = useState(null);
  const [percentRainSab, setPercentRainSab] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [percentRainToday, setPercentRainToday] = useState(null);
  const [cloudiness, setCloudiness] = useState(null);

  fetch("https://api.hgbrasil.com/weather")
    .then(reponse => reponse.json())
    .then(json => {
      setTemperatura(json.results.temp);
      setDescription(json.results.description);
      setcityName(json.results.city_name);
      setDate(json.results.date);
      setHour(json.results.time);
      setWindSpeed(json.results.wind_speedy);
      setHumidity(json.results.humidity);
      setPercentRainToday(json.results.forecast[0].rain_probability);
      setCloudiness(json.results.cloudiness);
      const todayWeek = json.results.forecast[0].weekday;


      for (let i = 0; i < 7; i++) {
        if(json.results.forecast[i].weekday == "Dom") {
          if (todayWeek == json.results.forecast[i].weekday) setDomingo('Hoje');
          setTempMaxDomingo(json.results.forecast[i].max);
          setTempMinDomingo(json.results.forecast[i].min);
          setPercentRainDomingo(json.results.forecast[i].rain_probability);
        }
        
        else if (json.results.forecast[i].weekday == "Seg") {
          if (todayWeek == json.results.forecast[i].weekday) setSegunda('Hoje');
          setTempMaxSeg(json.results.forecast[i].max);
          setTempMinSeg(json.results.forecast[i].min);
          setPercentRainSeg(json.results.forecast[i].rain_probability);
        }

        else if (json.results.forecast[i].weekday == "Ter") {
          if (todayWeek == json.results.forecast[i].weekday) setTerca('Hoje');
          setTempMaxTer(json.results.forecast[i].max);
          setTempMinTer(json.results.forecast[i].min);
          setPercentRainTer(json.results.forecast[i].rain_probability);
        }

        else if (json.results.forecast[i].weekday == "Qua") {
          if (todayWeek == json.results.forecast[i].weekday) setQuarta('Hoje');
          setTempMaxQua(json.results.forecast[i].max);
          setTempMinQua(json.results.forecast[i].min);
          setPercentRainQua(json.results.forecast[i].rain_probability);
        }

        else if (json.results.forecast[i].weekday == "Qui") {
          if (todayWeek == json.results.forecast[i].weekday) setQuinta('Hoje');
          setTempMaxQui(json.results.forecast[i].max);
          setTempMinQui(json.results.forecast[i].min);
          setPercentRainQui(json.results.forecast[i].rain_probability);
        }

        else if (json.results.forecast[i].weekday == "Sex") {
          if (todayWeek == json.results.forecast[i].weekday) setSexta('Hoje');
          setTempMaxSex(json.results.forecast[i].max);
          setTempMinSex(json.results.forecast[i].min);
          setPercentRainSex(json.results.forecast[i].rain_probability);
        }

        else if (json.results.forecast[i].weekday == "Sáb") {
          if (todayWeek == json.results.forecast[i].weekday) setSabado('Hoje');
          setTempMaxSab(json.results.forecast[i].max);
          setTempMinSab(json.results.forecast[i].min);
          setPercentRainSab(json.results.forecast[i].rain_probability);
        }
      }


    });

     return(
      <LinearGradient colors={['#5CBCDB', '#0096C7', '#0054B6', '#01377C']} start={{x:0.5, y:0}} style={{flex: 1}}>
       <ScrollView>
          <View >
            <Header city={cityName} date={date} hour={hour}/>
            <Body 
            temp={temperatura}
            description={description}
            domingo={domingo}
            sabado={sabado}
            sexta={sexta}
            quinta={quinta}
            quarta={quarta}
            terca={terca}
            segunda={segunda}
            tempMaxDomingo={tempMaxDomingo}
            tempMinDomingo={tempMinDomingo}
            percentRainDomingo={percentRainDomingo}
            tempMaxSeg={tempMaxSeg}
            tempMinSeg={tempMinSeg}
            percentRainSeg={percentRainSeg}
            tempMaxTer={tempMaxTer}
            tempMinTer={tempMinTer}
            percentRainTer={percentRainTer}
            tempMaxQua={tempMaxQua}
            tempMinQua={tempMinQua}
            percentRainQua={percentRainQua}
            tempMaxQui={tempMaxQui}
            tempMinQui={tempMinQui}
            percentRainQui={percentRainQui}
            tempMaxSex={tempMaxSex}
            tempMinSex={tempMinSex}
            percentRainSex={percentRainSex}
            tempMaxSab={tempMaxSab}
            tempMinSab={tempMinSab}
            percentRainSab={percentRainSab}
            windSpeed={windSpeed}
            umidade={humidity}
            percentRainToday={percentRainToday}
            visibilidade={cloudiness}
            />
          </View>
       </ScrollView>
      </LinearGradient>
    );
}

export default App;

