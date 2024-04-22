import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styleBody from "../styles/styleMain";

export default function Loading(props) {
    
        return(
            <View style={styleBody.loading}> 
                <ActivityIndicator size='large' color='#fff' />
                <Text style={{color: "#fff"}}>Carregando Informações</Text>
            </View>
        );
    
}