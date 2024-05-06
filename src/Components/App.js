import React, { useState } from "react";
import Main from "./Main";
import MyContext from "./Context";
import News from "./News";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const App = () =>{

  const [cityName, setCityName] = useState('');

     return(
      <MyContext.Provider value={{cityName, setCityName}}>    
        <NavigationContainer >
          <Tab.Navigator initialRouteName="Main" 

              screenOptions={{headerShown: false, tabBarShowLabel: false, 
              tabBarStyle: {
                borderRadius: 8,
                position: 'absolute',
                left: 10,
                right: 10,
                bottom: 10,
              }}} >
            <Tab.Screen name="Main" component={Main} 
            
              options={{
                tabBarIcon: ({color, size, focused}) => {
                  if (focused) {
                    return (
                      <View style={{justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
                        <Image source={require('../img/iconeClima.png')} style={{tintColor: '#000', padding: 10}}/>
                      </View>
                    );
                  }
                  return <Image source={require('../img/iconeClima.png')} style={{tintColor: '#000', padding: 10}}/>
                }
              }}
          />
                 
          <Tab.Screen name="News" component={News} 
              
            options={{
              tabBarIcon: ({color, size, focused}) => {
                if (focused) {
                  return (
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
                      <Image source={require('../img/jornal-dobrado.png')} style={{tintColor: '#000', padding: 10}}/>
                    </View>
                  );
                  
                }
                return <Image source={require('../img/jornal-dobrado.png')} style={{tintColor: '#000', padding: 10}}/>
              },
            }}  
          />

          </Tab.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
    );
}

export default App;

