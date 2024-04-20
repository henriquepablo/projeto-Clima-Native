import React, { Component, useState } from "react";
import { ScrollView, View } from "react-native";
import Main from "./Main";
import LinearGradient from "react-native-linear-gradient";
import MyContext from "./Context";

const App = () =>{

  const [cityName, setCityName] = useState('');

     return(
        <MyContext.Provider value={{cityName, setCityName}}>
          <LinearGradient colors={['#5CBCDB', '#0096C7', '#0054B6', '#01377C']} start={{x:0.5, y:0}} style={{flex: 1}}>
            <ScrollView>
              <View >
                <Main />
              </View>
            </ScrollView>
          </LinearGradient>
      </MyContext.Provider>
    );
}

export default App;

