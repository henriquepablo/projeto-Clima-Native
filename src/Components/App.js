import React, { Component, useState } from "react";
import { ScrollView, View } from "react-native";
import Main from "./Main";
import LinearGradient from "react-native-linear-gradient";

const App = () =>{
     return(
      <LinearGradient colors={['#5CBCDB', '#0096C7', '#0054B6', '#01377C']} start={{x:0.5, y:0}} style={{flex: 1}}>
       <ScrollView>
          <View >
            <Main />
          </View>
       </ScrollView>
      </LinearGradient>
    );
}

export default App;

