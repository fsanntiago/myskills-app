import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Home() {
  return (
    <View style={styles.conteiner}>
      <Text>Welcome, Fabricio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
