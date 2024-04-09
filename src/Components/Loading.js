import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styleBody from "../styles/styleMain";

export default class Loading extends Component {
    render() {
        return(
            <View style={styleBody.loading}> 
                <ActivityIndicator size='large' color='#000' />
                <Text>Carregando Informações</Text>
            </View>
        );
    }
}