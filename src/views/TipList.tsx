import React from 'react';
import { View, ScrollView, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { Tip } from '../models/tip';
import { TipListCell } from './TipListCell';

interface IProps {
  styleScroll?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  items: typeof Tip[];
  isScrollable?: boolean;
}

export function TipList({ styleScroll, style, items = [], isScrollable = false }: IProps) {
  const getEntries = (items: typeof Tip[]) =>
    items.map((item, index) => <TipListCell numberOfTip={index} />);

  return (
    <ScrollView style={[styles.fill, styleScroll]}>
      <View style={style}>{getEntries(items)}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});
