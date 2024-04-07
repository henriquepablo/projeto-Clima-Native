import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from '../styles/styleBody';

export default class DayWeek extends Component {
    render() {
        return (
            <View style={styles.dayWeek}>
              <Text style={styles.textWeek}>{this.props.weekday}</Text>
              <Image source={require('../img/rain.png')}/>
              <Text style={styles.percentRain}>{this.props.percentRain}%</Text>
              <Image source={require('../img/cloud-sun.png')}/>
              <Image source={require('../img/cloud-night.png')}/>
              <Text style={styles.temp}>{this.props.tempMax}°C</Text>
              <Text style={styles.temp}>{this.props.tempMin}°C</Text>
            </View>
        );
    }
}