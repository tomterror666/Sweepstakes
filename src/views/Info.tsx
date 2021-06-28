// @ts-ignore
import React from "react";
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Text,
  View,
} from "react-native";
import { Tip } from "../models/tip";
import { Lottory } from "../models/lottory";
import { addDays } from "../utils/get-current-date";
import { getFormattedDateString } from "../utils/get-formatted-date-string";

interface IProps {
  style?: StyleProp<ViewStyle | TextStyle>;
  tips?: Tip[];
  lottory: Lottory;
}

export function Info({ style, tips = [], lottory }: IProps) {
  const startDate: Date = tips.length > 0 ? tips[0].startDate : null;
  const endDate: Date =
    tips.length > 0
      ? addDays(tips[0].duration, tips[0].startDate.toString())
      : null;

  return (
    <View style={style}>
      <View style={styles.textLine}>
        <Text style={styles.infoText}>Anzahl der Tips:</Text>
        <Text style={styles.valueText}>{tips.length}</Text>
      </View>
      <View style={styles.textLine}>
        <Text style={styles.infoText}>Gültig von:</Text>
        <Text style={styles.valueText}>
          {(startDate && getFormattedDateString(startDate.toString())) || "-"}
        </Text>
        <Text style={styles.infoText}>bis:</Text>
        <Text style={styles.valueText}>
          {(endDate && getFormattedDateString(endDate.toString())) || "-"}
        </Text>
      </View>
      <View style={styles.lastTextLine}>
        <Text style={styles.infoText}>Aktueller Gewinn:</Text>
        <Text style={styles.goldValueText}>
          {tips.length > 0
            ? `${lottory.currentAmount(tips)} mal gewonnen`
            : "-"}{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textLine: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  lastTextLine: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  infoText: {
    marginRight: 8,
    color: "#666",
  },
  valueText: {
    marginRight: 8,
    color: "#111",
  },
  goldValueText: {
    marginRight: 8,
    color: "gold",
  },
});
