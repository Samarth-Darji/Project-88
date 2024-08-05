import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform} from 'react-native';

export default class HomeScreen extends React.Component{
    render() {
        return(
            <View style={styles.container} >
              <SafeAreaView style={styles.droidSafeArea} />
                <View>
                <Text style={styles.title}> STELLAR </Text>
                <Text style={styles.title}> APP! </Text>
                </View>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>SPACECRAFTS SCREEN! </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>STAR MAP1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>DAILY PICS SCREEN! </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>STAR MAP1 </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7D9DAF",
    },
    droidSafeArea: {
        marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    title: {
        alignItems: 'centre',
        fontSize: 20,
        marginLeft: 90,
        color: 'blue',
        fontWeight : "bold",
    },
    routeCard: {
        backgroundColor: 'green',
        color: 'green',
        marginTop: 30,
        width:width/2,
        height:10,
        borderRadius: 10,
        borderColor:'red',
        justifyContent: "center",
        alignItems: "center",
    },
    routeText: {
        color: 'white',
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'black',
    }
})
