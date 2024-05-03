import React from "react";
import { View, Image, Text } from "react-native";

import styleCard from "../styles/styleCard";
import DropShadow from "react-native-drop-shadow";

export default function Card(props){
    return (
        <DropShadow style={styleCard.dropShadow}>
            <View style={styleCard.card}>
                <View style={styleCard.cardWithImage}>
                    <Image source={props.pathImg}/>
                    <Text style={styleCard.textCard}>{props.textInfo} {props.info}</Text>
                </View>
                <Text style={styleCard.textCard}>{props.textName}</Text>
            </View>
        </DropShadow>
    );
}