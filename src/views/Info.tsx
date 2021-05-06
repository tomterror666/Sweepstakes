import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, TextStyle, Text, View, } from 'react-native';

interface IProps {
  style?: StyleProp<ViewStyle | TextStyle>;
}

export function Info({ style }: IProps) {
  return (
    <View style={style}>
      <View style={styles.textLine}>
        <Text style={styles.infoText}>Anzahl der Tips:</Text>
        <Text style={styles.valueText}>6</Text>
      </View>
      <View style={styles.textLine}>
        <Text style={styles.infoText}>Gültig von:</Text>
        <Text style={styles.valueText}>12.04.2021</Text>
        <Text style={styles.infoText}>bis:</Text>
        <Text style={styles.valueText}>09.05.2021</Text>
      </View>
      <View style={styles.lastTextLine}>
        <Text style={styles.infoText}>Aktueller Gewinn:</Text>
        <Text style={styles.goldValueText}>22,74 €</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textLine: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  lastTextLine: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  infoText: {
    marginRight: 8,
    color: '#666',
  },
  valueText: {
    marginRight: 8,
    color: '#111',
  },
  goldValueText: {
    marginRight: 8,
    color: 'gold',
  },
});