import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from '../styles/styleMain';

export default function DayWeek(props) {
        return (
            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{props.weekday}</Text>
              <Image source={require('../img/rain.png')}/>
              <Text style={styles.percentRain}>{props.percentRain}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{props.tempMax}°C</Text>
              <Text style={styles.temp}>{props.tempMin}°C</Text>
            </View>
        );
}