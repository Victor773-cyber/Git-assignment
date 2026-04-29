import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Index(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, World!</Text>
      <Text style={styles.subtitle}>My name is Adeyeye Victor Adegbola</Text>
      <Text style={styles.heading}>RUN/CYB/22/13083</Text>
      <Text style={styles.subtitle}>Welcome to my first React Native and TypeScript</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});