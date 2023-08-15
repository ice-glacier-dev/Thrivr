import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CheckListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});

export default CheckListScreen;
