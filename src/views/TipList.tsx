// @ts-ignore
import React from 'react';
import { View, ScrollView, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { Tip } from '../models/tip';
import { TipListCell } from './TipListCell';

interface IProps {
  styleScroll?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  tips: Tip[];
  isScrollable?: boolean;
  removeTip: (tip: Tip) => void;
}

export function TipList({ styleScroll, style, tips = [], isScrollable = false, removeTip }: IProps) {

  const getEntries = (items: Tip[]) =>
    items.map((item, index) => <TipListCell key={index} numberOfTip={index + 1} tip={item} removeTip={removeTip}/>);

  return (
    <ScrollView style={[styles.fill, styleScroll]}>
      <View style={style}>{getEntries(tips)}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});
