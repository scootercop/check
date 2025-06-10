import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CheckerProps {
}

class Checker extends Component<CheckerProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Checker Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
});

export default Checker;