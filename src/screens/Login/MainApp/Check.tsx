import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CheckProps {
    // define your props here, e.g.:
    // label: string;
}

class Check extends Component<CheckProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Check Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Check;