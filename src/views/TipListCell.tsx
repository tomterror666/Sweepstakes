import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, TextStyle, Text, View, } from 'react-native';

interface IProps {
  numberOfTip: number;
};

export function TipListCell({ numberOfTip }: IProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.nameText}>`${numberOfTip}.Tip`</Text>
        <Text style={styles.dateText}>17.05.2021</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'left',
    backgroundColor: '#eee',},
  nameText: {
    flex: 1,
  },
  dateText: {},
});