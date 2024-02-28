import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373b3d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        padding: 15,
        borderRadius: 8,
        marginTop: 6,
        borderWidth: 0,
        backgroundColor:'#c78f26',
        textAlign:"center",
        width:300,
    },
    btn: {
        width:55,
        padding: 15,
        borderRadius: 8,
        margin: 20,
        borderWidth: 0,
        alignSelf: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        margin: 4,
        borderWidth: 0,
        borderRadius: 8,
        color: '#fff',
        backgroundColor:'#c78f26',
        fontWeight: 'bold',
        padding: 6,
        width: '80%',
    },
});

export {styles};