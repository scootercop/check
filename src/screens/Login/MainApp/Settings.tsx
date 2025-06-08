import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SettingsProps {
    // define your props here, e.g.:
    // label: string;
}

class Settings extends Component<SettingsProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings Component</Text>
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

export default Settings;