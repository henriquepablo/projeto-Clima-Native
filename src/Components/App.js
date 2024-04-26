import React, { useState } from "react";
import Main from "./Main";
import MyContext from "./Context";
import News from "./News";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () =>{

  const [cityName, setCityName] = useState('');

     return(
      <MyContext.Provider value={{cityName, setCityName}}>    
        <NavigationContainer >
          <Tab.Navigator initialRouteName="Main">
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="News" component={News} />
          </Tab.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
    );
}

export default App;

