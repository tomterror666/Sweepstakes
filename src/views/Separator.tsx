// @ts-ignore
import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  height?: number;
  color?: any;
}

export function Separator({ height = 1, color = "#ccc" }: IProps) {
  return <View style={{ height, backgroundColor: color }} />;
}
