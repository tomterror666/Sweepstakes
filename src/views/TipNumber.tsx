// @ts-ignore
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

interface IProps {
  value: number;
  isMarked: boolean;
  onPress: (value: number) => void;
  margin?: number;
}

export function TipNumber({ value, isMarked, onPress, margin = 10 }: IProps) {
  const [textSize, setTextSize] = useState(0);

  const adaptScreenSize = (event) => {
    if (textSize === 0) {
      setTextSize(event.nativeEvent.layout.height / 2);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.input,
        { margin: margin, backgroundColor: isMarked ? "black" : "white" },
      ]}
      onPress={() => onPress(value)}
      onLayout={(event) => {
        adaptScreenSize(event);
      }}
    >
      <View style={{ flex: 1 }} />
      <Text
        style={[
          styles.text,
          { fontSize: textSize, color: isMarked ? "white" : "black" },
        ]}
      >
        {value}
      </Text>
      <View style={{ flex: 1 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    aspectRatio: 1,
    margin: 10,
    borderWidth: 1,
  },
  text: {
    textAlign: "center",
  },
});
