import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styleBody from "../styles/styleMain";

export default function Loading(props) {
    
        return(
            <View style={styleBody.loading}> 
                <ActivityIndicator size='large' color='#000' />
                <Text style={{color: "#000"}}>Carregando Informações</Text>
            </View>
        );
    
}