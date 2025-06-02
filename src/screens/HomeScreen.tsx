import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Section} from '../components';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Section title="Home Screen">
        Welcome to the scalable app structure!
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
