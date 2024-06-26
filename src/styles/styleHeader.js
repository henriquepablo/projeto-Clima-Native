import { StyleSheet } from "react-native";

const styleHeader = StyleSheet.create({

    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    imgMapHeader: {
        height: 22,
        width: 22
    },

    input: {
        width: 350,
        height: 50,
        marginTop: 40,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 30,
        fontFamily: 'Lato-Medium',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {width: -4, height: 10},
        backgroundColor: '#fff'
    },

    viewLocationHeader: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 30,
        marginBottom: 20
    },

    textHeader: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'Roboto-Regular',
    },

    viewIconSearchCircle: {
        justifyContent: 'space-between', 
        flexDirection: 'row',  
        width: 330, 
        marginTop: -33
    }
});

export default styleHeader;