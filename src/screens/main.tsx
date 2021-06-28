// @ts-ignore
import React, { useEffect } from "react";
import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import { Info } from "../views/Info";
import { DigitalClock } from "../views/DigitalClock";
import { UIActivityIndicator } from "react-native-indicators";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import { readResults } from "../actions/read-results";
import { readMyTips } from "../actions/read-my-tips";

export function Main({ navigation }) {
  const allNumbers = useSelector(
    (state: RootState) => state.getAllNumbersReducer
  );
  const myTips = useSelector((state: RootState) => state.getTipsReducer);
  const dispatch = useDispatch();
  const getAllNumbers = () => dispatch(readResults(2021));
  const readTips = () => dispatch(readMyTips());

  useEffect(() => {
    readTips();
    getAllNumbers();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {allNumbers.numberOfYears == 0 ? (
        <>
          <UIActivityIndicator color={"#f44"} count={16} size={32} />
        </>
      ) : (
        <>
          <DigitalClock />
          <Info
            tips={myTips}
            lottory={allNumbers}
            style={{ backgroundColor: "#eee" }}
          />
        </>
      )}
      <TouchableOpacity
        style={{
          backgroundColor: "#7f7",
          flexDirection: "column",
          height: 44,
          textColor: "#fff",
        }}
        onPress={() => {
          navigation.navigate("My Tips");
        }}
      >
        <View style={{ flex: 1 }} />
        <Text style={{ textAlign: "center" }}>My Tips</Text>
        <View style={{ flex: 1 }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#7f7",
          flexDirection: "column",
          height: 44,
          textColor: "#fff",
        }}
        onPress={() => {
          console.log("adf");
          navigation.navigate("My Wins");
        }}
      >
        <View style={{ flex: 1 }} />
        <Text style={{ textAlign: "center" }}>My Wins</Text>
        <View style={{ flex: 1 }} />
      </TouchableOpacity>
      <View style={{ flex: 1, backgroundColor: "#77f" }} />
    </SafeAreaView>
  );
}
