import React, { Component } from "react";
import { Image, Text, TextInput, View } from "react-native";
import styles from "../styles/styleHeader";

export default function Header(props) {
    return (
      <View style={styles.containerHeader}>
      
        <TextInput 
          placeholder="Pesquisar Local" 
          style={styles.input}
        />

        <View style={styles.viewLocationHeader}>
          <Image source={require('../img/map-pin.png')} style={styles.imgMapHeader}/>
          <Text style={styles.textHeader}>{props.city} </Text>
        </View>

        <Text style={styles.textHeader}>Última atualização às {props.hour}</Text>
      </View>
    )
};
