// @ts-ignore
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { WinList } from "../views/WinList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import { readLottery } from "../actions/read-lottery";
import { readMyTips } from "../actions/read-my-tips";
import { Win } from "../models/win";

export function MyWins() {
  const allNumbers = useSelector(
    (state: RootState) => state.getAllNumbersReducer
  );
  const myTips = useSelector((state: RootState) => state.getTipsReducer);

  const dispatch = useDispatch();
  const getAllNumbers = () => dispatch(readLottery(2000));
  const readTips = () => dispatch(readMyTips());

  useEffect(() => {
    readTips();
    getAllNumbers();
  }, []);

  const allWins = (): Win[] => {
    let myWins: Win[] = [];

    myTips.map((tip) => {
      myWins.push(...allNumbers.numbers.checkTip(tip));
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
      {!allNumbers.numbers || allNumbers.numbers.currentAmount(myTips) == 0 ? (
        <Text>Nischt jewonnen...</Text>
      ) : (
        <WinList wins={allWins()} style={{ margin: 10 }} />
      )}
    </SafeAreaView>
  );
}
