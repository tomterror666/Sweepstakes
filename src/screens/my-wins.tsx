// @ts-ignore
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { WinList } from "../views/WinList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import { readResults } from "../actions/read-results";
import { readMyTips } from "../actions/read-my-tips";
import { Win } from "../models/win";

export function MyWins() {
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

  const allWins = (): Win[] => {
    let myWins: Win[] = [];

    myTips.map((tip) => {
      myWins.push(...allNumbers.checkTip(tip));
    });

    return myWins;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {!allNumbers || allNumbers.currentAmount(myTips) == 0 ? (
        <Text>Nischt jewonnen...</Text>
      ) : (
        <WinList wins={allWins()} style={{ margin: 10 }} />
      )}
    </SafeAreaView>
  );
}
