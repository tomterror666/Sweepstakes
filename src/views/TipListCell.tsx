// @ts-ignore
import React from 'react';
import { StyleSheet, ViewStyle, TextStyle, Text, View, } from 'react-native';
import { Tip } from '../models/tip';
import { getFormattedDateString } from '../utils/get-formatted-date-string';

interface IProps {
  numberOfTip?: number;
  tip: Tip;
};

export function TipListCell({ numberOfTip = 1, tip }: IProps) {
  console.log(777, numberOfTip);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.nameText}>{numberOfTip}.Tip</Text>
        <View style={styles.tipContainer}>
          <Text style={styles.introText}>Zahlen:</Text>
          <Text style={styles.numberText}>{tip.numberOne}</Text>
          <Text style={styles.numberText}>{tip.numberTwo}</Text>
          <Text style={styles.numberText}>{tip.numberThree}</Text>
          <Text style={styles.numberText}>{tip.numberFour}</Text>
          <Text style={styles.numberText}>{tip.numberFife}</Text>
          <Text style={styles.numberText}>{tip.numberSix}</Text>
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.introText}>Superzahl:</Text>
          <Text style={styles.numberText}>{tip.superNumber}</Text>
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.introText}>Erstellt am:</Text>
          <Text style={styles.numberText}>{getFormattedDateString(tip.startDate.toString())}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#eee',
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nameText: {
    flex: 1,
    fontWeight: '800',
    fontSize: 20,
  },
  introText: {
    fontWeight: '600',
    fontSize: 16,
  },
  numberText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
