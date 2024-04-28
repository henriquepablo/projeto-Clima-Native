import React, { useEffect, useState} from "react";
import { Linking, ScrollView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styleNews from "../styles/styleNews";
import Loading from "./Loading";

const News = () => {

    const [newsItens, setNewsItens] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function loadInfo() {
        fetch("http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticias&qtd=50")
        .then(response =>  response.json())
        .then(json => {
            setNewsItens(json.items);
            setIsLoading(false);
        }); 
    }
    
    useEffect(() => {
        loadInfo();
    }, []); 
    

    if (isLoading) {
        return(
          <Loading />
        ); 
    }

    else {
        return (
            <View>
                <ScrollView>  
                    <LinearGradient colors={['#5CBCDB', '#0096C7', '#0054B6', '#01377C']} start={{x:0.5, y:0}} style={{flex: 1}}>
                
                        {newsItens.map((item, index) => (
                            <View key={index} style={styleNews.container} >
                                
                                <View style={styleNews.newsHeader}>
                                    <Text style={styleNews.titulo}>{item.titulo}</Text>
                                    <Text style={styleNews.dataPublicacao}>{item.data_publicacao}</Text>
                                </View>
                                
                                <Text style={styleNews.introducao}>{item.introducao}</Text>
                                
                                <Text style={styleNews.link} onPress={() => {
                                    Linking.openURL(item.link)
                                }}>Leia a notícia completa</Text>
                            
                            </View>
                        ))}
    
                    </LinearGradient> 
                
                </ScrollView>
            </View>
        );
    }
}

export default News;