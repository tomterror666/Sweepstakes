// @ts-ignore
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Tip } from "../models/tip";
import { getFormattedDateString } from "../utils/get-formatted-date-string";
import { removeATip } from "../actions/remove-a-tip";
import { useDispatch } from "react-redux";

interface IProps {
  numberOfTip?: number;
  tip: Tip;
}

export function TipListCell({ numberOfTip = 1, tip }: IProps) {
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{numberOfTip}.Tip</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => {
              dispatch(removeATip(tip));
            }}
          >
            <Text style={styles.removeButtonText}>x</Text>
          </TouchableOpacity>
        </View>
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
          <Text style={styles.numberText}>
            {getFormattedDateString(tip.startDate.toString())}
          </Text>
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.introText}>Gültigkeitsdauer:</Text>
          <Text style={styles.numberText}>{tip.duration}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "#eee",
  },
  nameContainer: {
    flexDirection: "row",
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  nameText: {
    flex: 1,
    fontWeight: "800",
    fontSize: 20,
  },
  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "transparent",
  },
  removeButtonText: {
    margin: 3,
    textAlign: "center",
  },
  introText: {
    fontWeight: "600",
    fontSize: 16,
  },
  numberText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
