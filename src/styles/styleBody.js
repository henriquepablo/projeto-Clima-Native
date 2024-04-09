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

    card: {
        width: 150,
        height: 96,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardWithImage: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 5
    },

    textCard: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Lato-Regular'
    },

    viewNextDays: {
        borderWidth: 1,
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
        height: 700,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});

export default styleBody;