import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface CheckProps {
    // define your props here, e.g.:
    // label: string;
}

class Check extends Component<CheckProps> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, margin: 5 }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>Check it out!</Text>
                    </View>
                    <View style={{ borderColor: 'black', height: 25, width: 25, borderRadius: 25, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="user" color="black" />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, margin: 5, paddingHorizontal: 10 }}>
                    <TextInput
                        placeholder="Search"
                        style={{ height: 40, flexGrow: 1 }}
                    />
                    <Icon name="magnifying-glass" size={20} color="black" />
                </View >
                <MapView initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },

});

export default Check;