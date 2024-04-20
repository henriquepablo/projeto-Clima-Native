import React, { Component } from "react";
import { Image, Text, TextInput, View } from "react-native";
import styles from "../styles/styleHeader";
import { useContext } from "react";
import MyContext from "./Context";

export default function Header(props) {

  const {cityName, setCityName} = useContext(MyContext);

    return (
      <View style={styles.containerHeader}>
      
        <TextInput 
          placeholder="Pesquisar Local" 
          style={styles.input}
          onSubmitEditing={text => setCityName(text.nativeEvent.text)}
        />

        <View style={styles.viewLocationHeader}>
          <Image source={require('../img/map-pin.png')} style={styles.imgMapHeader}/>
          <Text style={styles.textHeader}>{props.city} </Text>
        </View>

        <Text style={styles.textHeader}>Última atualização às {props.hour}</Text>
      </View>
    )
};
