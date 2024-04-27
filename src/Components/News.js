import React, { useEffect, useState} from "react";
import { ScrollView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const News = () => {

    const [newsItens, setNewsItens] = useState([]);

    function loadInfo() {
        fetch("http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticias&qtd=50")
        .then(response =>  response.json())
        .then(json => {
            
            for (let i = 0; i < 5; i++) {
                setNewsItens(json.items);
            }
            
        }); 
    }
    
    useEffect(() => {
        loadInfo();
    }, []); 
    
    return (
        <View style={{flex: 1}}>
            <ScrollView>
            
                <LinearGradient colors={['#5CBCDB', '#0096C7', '#0054B6', '#01377C']} start={{x:0.5, y:0}} style={{flex: 1}}>
            
                    {newsItens.map((item, index) => (
                        <View key={index} style={{borderColor: '#000', borderStyle: 'dashed', borderWidth: 1}}>
                            <Text>{item.titulo}</Text>
                            <Text>{item.introducao}</Text>
                        </View>
                    ))}

                </LinearGradient> 
            
            </ScrollView>
        </View>
    );
}

export default News;