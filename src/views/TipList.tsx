// @ts-ignore
import React from "react";
import {
  View,
  ScrollView,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Tip } from "../models/tip";
import { TipListCell } from "./TipListCell";

interface IProps {
  styleScroll?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  tips: Tip[];
  isScrollable?: boolean;
}

export function TipList({
  styleScroll,
  style,
  tips = [],
  isScrollable = false,
}: IProps) {
  const getEntries = (items: Tip[]) =>
    items
      ? items.map((item, index) => (
          <TipListCell key={index} numberOfTip={index + 1} tip={item} />
        ))
      : null;

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
