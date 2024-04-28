import { StyleSheet } from "react-native";

const styleNews = StyleSheet.create({

    container: {
        backgroundColor: '#EDF2FB',
        margin: 10,
        borderRadius: 15,
        height: 230,
        width: 375,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    newsHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        marginTop: 20,
        fontFamily: 'Lato-Black',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
    },  

    introducao: {
        fontFamily: 'Roboto-Black',
        color: '#000',
        margin: 10,
        textAlign: 'justify'
    },

    dataPublicacao: {
        fontFamily: 'Lato-Italic',
        marginBottom: 5
    },

    link: {
        fontFamily: 'Lato-Italic',
        marginLeft: 10
    }

});

export default styleNews;