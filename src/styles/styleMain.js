import { StyleSheet } from "react-native";

const styleBody = StyleSheet.create({
    containerBody: {
        alignItems: 'center',
        margin: 40,
        gap: 30
    },

    textTemperatura: {
        fontSize: 55,
        color: '#fff',
        fontFamily: 'Lato-Regular'
    },

    descriptionDay: {
        fontFamily: 'Lato-Regular',
        color: '#fff',
        fontSize: 20
    },

    viewCardBody: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },

    viewNextDays: {
        borderRadius: 10,
        height: 410,
        margin: 40,
    },

    dayWeek: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#fff',
        height: 41,
        width: 342,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },

    dropShadow: {
        shadowColor: '#000', 
        shadowOffset: {width: 6, height: 10}, 
        shadowOpacity: 0.5, 
        shadowRadius: 2
    },  

    textWeek: {
        width: 100,
        fontFamily: 'Roboto-Bold',
        color: '#000',
    },

    percentRain: {
        fontFamily: 'Roboto-Bold',
        color: '#000'
    },

    temp: {
        fontFamily: 'Roboto-Bold',
        color: '#000',
    },

    alignICon: {
        marginRight: 15
    },

    alignIConDomingo: {
        marginRight: 6
    },

    loading: {
        height: 650,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});

export default styleBody;