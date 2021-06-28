// @ts-ignore
import React from "react";
import {
  View,
  ScrollView,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { Win } from "../models/Win";
import { Tip } from "../models/Tip";
import { WinListCell } from "./WinListCell";

interface IProps {
  styleScroll?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  wins: Win[];
  isScrollable?: boolean;
}

export function WinList({
  styleScroll,
  style,
  wins = [],
  isScrollable = false,
}: IProps) {
  const getEntries = (items: Win[]) =>
    items
      ? items.map((item, index) => (
          <WinListCell key={index} numberOfWin={index + 1} win={item} />
        ))
      : null;

  return (
    <ScrollView style={[styles.fill, styleScroll]}>
      <View style={style}>{getEntries(wins)}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});
