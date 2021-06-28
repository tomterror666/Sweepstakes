// @ts-ignore
import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { TipList } from "../views/TipList";
import { useIsFocused } from "@react-navigation/native";
import { Tip } from "../models/tip";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import { readMyTips } from "../actions/read-my-tips";

export function MyTips({ navigation }) {
  const isFocused = useIsFocused();
  const myTips = useSelector((state: RootState) => state.getTipsReducer);
  const dispatch = useDispatch();
  const readTips = () => dispatch(readMyTips());

  useEffect(() => {
    isFocused && readTips();
  }, [isFocused, myTips]);

  const openAddTip = () => {
    navigation.navigate("Add Tip");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {!myTips || myTips.length == 0 ? (
        <Text>Nix da...</Text>
      ) : (
        <TipList tips={myTips} style={{ margin: 10 }} />
      )}
      <TouchableOpacity
        style={{
          margin: 10,
          width: 100,
          height: 44,
          borderRadius: 22,
          backgroundColor: "#7f7",
          textAlign: "center",
        }}
        onPress={openAddTip}
      >
        <Text style={{ color: "#f73", textAlign: "center", padding: 5 }}>
          Neue Tipps hinzufügen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
