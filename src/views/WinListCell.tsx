// @ts-ignore
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Win } from "../models/win";
import { getFormattedDateString } from "../utils/get-formatted-date-string";

interface IProps {
  numberOfWin?: number;
  win: Win;
}

export function WinListCell({ numberOfWin = 1, win }: IProps) {
  const tip = win.winningTip;

  const isWinningNumber = (tipNumber: number): boolean => {
    let isWinning = false;

    win.winningNumbers.map((entry) => {
      if (entry.value === tipNumber) {
        isWinning = true;
      }
    });

    return isWinning;
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{numberOfWin}. Win</Text>
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.introText}>Zahlen:</Text>
          <Text
            style={
              isWinningNumber(tip.numberOne)
                ? styles.winningNumberText
                : styles.numberText
            }
          >
            {tip.numberOne}
          </Text>
          <Text
            style={
              isWinningNumber(tip.numberTwo)
                ? styles.winningNumberText
                : styles.numberText
            }
          >
            {tip.numberTwo}
          </Text>
          <Text
            style={
              isWinningNumber(tip.numberThree)
                ? styles.winningNumberText
                : styles.numberText
            }
          >
            {tip.numberThree}
          </Text>
          <Text
            style={
              isWinningNumber(tip.numberFour)
                ? styles.winningNumberText
                : styles.numberText
            }
          >
            {tip.numberFour}
          </Text>
          <Text
            style={
              isWinningNumber(tip.numberFife)
                ? styles.winningNumberText
                : styles.numberText
            }
          >
            {tip.numberFife}
          </Text>
          <Text
            style={
              isWinningNumber(tip.numberSix)
                ? styles.winningNumberText
                : styles.numberText
            }
          >
            {tip.numberSix}
          </Text>
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.introText}>Superzahl:</Text>
          <Text
            style={
              win.isSuperNumberWin
                ? styles.winningNumberText
                : styles.numberText
            }
          >
            {tip.superNumber}
          </Text>
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
  winningNumberText: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#fc6",
  },
});
