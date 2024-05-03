import { StyleSheet } from "react-native";

const styleCard = StyleSheet.create({
    
    card: {
        width: 150,
        height: 96,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0054B6'
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

    dropShadow: {
        shadowColor: '#000', 
        shadowOffset: {width: 6, height: 10}, 
        shadowOpacity: 0.5, 
        shadowRadius: 2
    }
});

export default styleCard;