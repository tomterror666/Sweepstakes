// @ts-ignore
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Tip } from "../models/tip";
import { Separator } from "../views/Separator";
import { TipNumber } from "../views/TipNumber";
import AsyncStorage from "@react-native-community/async-storage";
import Prompt from "react-native-prompt-android";
import { getFormattedDateString } from "../utils/get-formatted-date-string";
import DatePicker from "react-native-date-picker";
import { addATip } from "../actions/add-a-tip";
import { useDispatch } from "react-redux";

export function AddTip({ navigation }) {
  const [tips, setTips] = useState([]);
  const [superNumber, setSuperNumber] = useState(-1);
  const [startDate, setStartDate] = useState(new Date());
  const [duration, setDuration] = useState(-1);
  const [tipFinished, setTipFinished] = useState(false);
  const [askForStartingDate, setAskForStartingDate] = useState(false);
  const [askForDuration, setAskForDuration] = useState(false);
  const dispatch = useDispatch();

  const numberChanged = (value: number) => {
    const newTips = tips.slice();

    if (newTips.length < 7 && newTips.includes(value)) {
      const indexToDelete = newTips.indexOf(value);
      newTips.splice(indexToDelete, 1);
    } else if (newTips.length < 6 && !newTips.includes(value)) {
      newTips.push(value);
    }

    setTips(newTips);
    setTipFinished(
      newTips.length === 6 && superNumber !== -1 && duration !== -1
    );
  };

  const superNumberChanged = (value: number) => {
    if (superNumberSelected(value)) {
      setSuperNumber(-1);
      setTipFinished(false);
    } else {
      setSuperNumber(value);
      setTipFinished(tips.length == 6 && duration !== -1);
    }
  };

  const isSelected = (value: number): boolean => {
    return tips.includes(value);
  };

  const superNumberSelected = (value: number): boolean => {
    return superNumber === value;
  };

  /*const storeMyTip = async () => {
    try {
      const newTip = Tip.constructTip(tips, superNumber, startDate, duration);
      const tipsJson = await AsyncStorage.getItem("myTips");
      let currentTips: Tip[] = JSON.parse(tipsJson);

      if (currentTips) {
        currentTips.push(newTip);
      } else {
        currentTips = [newTip];
      }

      await AsyncStorage.setItem("myTips", JSON.stringify(currentTips));
    } catch (error) {
      console.log(error);
    }
  };*/

  const storeMyTip = () => {
    const newTip = Tip.constructTip(tips, superNumber, startDate, duration);
    dispatch(addATip(newTip));
  };

  const useTip = async () => {
    storeMyTip();
    navigation.goBack();
  };

  const askForValidPeriod = () => {
    Prompt(
      "Gültigkeit:",
      "Wie lange ist der Tipp gültig?",
      [
        {
          text: "Abbrechen",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Übernehmen",
          onPress: (text) => {
            setDuration(Number(text));
            setTipFinished(tips.length === 6 && superNumber !== -1);
          },
        },
      ],
      {
        type: "numeric",
        cancelable: true,
        defaultValue: duration === -1 ? "" : `${duration}`,
        placeholder: "Tage",
      }
    );
  };

  const askForStartDate = () => {
    setAskForStartingDate(true);
  };
  const closeAskForStartDate = () => {
    setAskForStartingDate(false);
  };

  return (
    <SafeAreaView>
      {askForStartingDate ? (
        <>
          <DatePicker
            date={startDate}
            mode={"date"}
            locale={"de"}
            textColor={"#77f"}
            androidVariant={"nativeAndroid"}
            onDateChange={setStartDate}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#53f" }]}
            onPress={closeAskForStartDate}
          >
            <View style={{ flex: 1 }} />
            <Text style={styles.buttonText}>Anwenden</Text>
            <View style={{ flex: 1 }} />
          </TouchableOpacity>
        </>
      ) : (
        <ScrollView>
          <View style={styles.firstNumberLine}>
            <TipNumber
              value={1}
              isMarked={isSelected(1)}
              onPress={numberChanged}
            />
            <TipNumber
              value={2}
              isMarked={isSelected(2)}
              onPress={numberChanged}
            />
            <TipNumber
              value={3}
              isMarked={isSelected(3)}
              onPress={numberChanged}
            />
            <TipNumber
              value={4}
              isMarked={isSelected(4)}
              onPress={numberChanged}
            />
            <TipNumber
              value={5}
              isMarked={isSelected(5)}
              onPress={numberChanged}
            />
            <TipNumber
              value={6}
              isMarked={isSelected(6)}
              onPress={numberChanged}
            />
            <TipNumber
              value={7}
              isMarked={isSelected(7)}
              onPress={numberChanged}
            />
          </View>
          <View style={styles.numberLine}>
            <TipNumber
              value={8}
              isMarked={isSelected(8)}
              onPress={numberChanged}
            />
            <TipNumber
              value={9}
              isMarked={isSelected(9)}
              onPress={numberChanged}
            />
            <TipNumber
              value={10}
              isMarked={isSelected(10)}
              onPress={numberChanged}
            />
            <TipNumber
              value={11}
              isMarked={isSelected(11)}
              onPress={numberChanged}
            />
            <TipNumber
              value={12}
              isMarked={isSelected(12)}
              onPress={numberChanged}
            />
            <TipNumber
              value={13}
              isMarked={isSelected(13)}
              onPress={numberChanged}
            />
            <TipNumber
              value={14}
              isMarked={isSelected(14)}
              onPress={numberChanged}
            />
          </View>
          <View style={styles.numberLine}>
            <TipNumber
              value={15}
              isMarked={isSelected(15)}
              onPress={numberChanged}
            />
            <TipNumber
              value={16}
              isMarked={isSelected(16)}
              onPress={numberChanged}
            />
            <TipNumber
              value={17}
              isMarked={isSelected(17)}
              onPress={numberChanged}
            />
            <TipNumber
              value={18}
              isMarked={isSelected(18)}
              onPress={numberChanged}
            />
            <TipNumber
              value={19}
              isMarked={isSelected(19)}
              onPress={numberChanged}
            />
            <TipNumber
              value={20}
              isMarked={isSelected(20)}
              onPress={numberChanged}
            />
            <TipNumber
              value={21}
              isMarked={isSelected(21)}
              onPress={numberChanged}
            />
          </View>
          <View style={styles.numberLine}>
            <TipNumber
              value={22}
              isMarked={isSelected(22)}
              onPress={numberChanged}
            />
            <TipNumber
              value={23}
              isMarked={isSelected(23)}
              onPress={numberChanged}
            />
            <TipNumber
              value={24}
              isMarked={isSelected(24)}
              onPress={numberChanged}
            />
            <TipNumber
              value={25}
              isMarked={isSelected(25)}
              onPress={numberChanged}
            />
            <TipNumber
              value={26}
              isMarked={isSelected(26)}
              onPress={numberChanged}
            />
            <TipNumber
              value={27}
              isMarked={isSelected(27)}
              onPress={numberChanged}
            />
            <TipNumber
              value={28}
              isMarked={isSelected(28)}
              onPress={numberChanged}
            />
          </View>
          <View style={styles.numberLine}>
            <TipNumber
              value={29}
              isMarked={isSelected(29)}
              onPress={numberChanged}
            />
            <TipNumber
              value={30}
              isMarked={isSelected(30)}
              onPress={numberChanged}
            />
            <TipNumber
              value={31}
              isMarked={isSelected(31)}
              onPress={numberChanged}
            />
            <TipNumber
              value={32}
              isMarked={isSelected(32)}
              onPress={numberChanged}
            />
            <TipNumber
              value={33}
              isMarked={isSelected(33)}
              onPress={numberChanged}
            />
            <TipNumber
              value={34}
              isMarked={isSelected(34)}
              onPress={numberChanged}
            />
            <TipNumber
              value={35}
              isMarked={isSelected(35)}
              onPress={numberChanged}
            />
          </View>
          <View style={styles.numberLine}>
            <TipNumber
              value={36}
              isMarked={isSelected(36)}
              onPress={numberChanged}
            />
            <TipNumber
              value={37}
              isMarked={isSelected(37)}
              onPress={numberChanged}
            />
            <TipNumber
              value={38}
              isMarked={isSelected(38)}
              onPress={numberChanged}
            />
            <TipNumber
              value={39}
              isMarked={isSelected(39)}
              onPress={numberChanged}
            />
            <TipNumber
              value={40}
              isMarked={isSelected(40)}
              onPress={numberChanged}
            />
            <TipNumber
              value={41}
              isMarked={isSelected(41)}
              onPress={numberChanged}
            />
            <TipNumber
              value={42}
              isMarked={isSelected(42)}
              onPress={numberChanged}
            />
          </View>
          <View style={styles.numberLine}>
            <TipNumber
              value={43}
              isMarked={isSelected(43)}
              onPress={numberChanged}
            />
            <TipNumber
              value={44}
              isMarked={isSelected(44)}
              onPress={numberChanged}
            />
            <TipNumber
              value={45}
              isMarked={isSelected(45)}
              onPress={numberChanged}
            />
            <TipNumber
              value={46}
              isMarked={isSelected(46)}
              onPress={numberChanged}
            />
            <TipNumber
              value={47}
              isMarked={isSelected(47)}
              onPress={numberChanged}
            />
            <TipNumber
              value={48}
              isMarked={isSelected(48)}
              onPress={numberChanged}
            />
            <TipNumber
              value={49}
              isMarked={isSelected(49)}
              onPress={numberChanged}
            />
          </View>
          <Separator />
          <View style={styles.superZahlLine}>
            <TipNumber
              value={0}
              isMarked={superNumberSelected(0)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={1}
              isMarked={superNumberSelected(1)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={2}
              isMarked={superNumberSelected(2)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={3}
              isMarked={superNumberSelected(3)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={4}
              isMarked={superNumberSelected(4)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={5}
              isMarked={superNumberSelected(5)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={6}
              isMarked={superNumberSelected(6)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={7}
              isMarked={superNumberSelected(7)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={8}
              isMarked={superNumberSelected(8)}
              onPress={superNumberChanged}
              margin={5}
            />
            <TipNumber
              value={9}
              isMarked={superNumberSelected(9)}
              onPress={superNumberChanged}
              margin={5}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.introText}>Erstellungsdatum:</Text>
            <TouchableOpacity
              style={styles.numberInputText}
              onPress={askForStartDate}
            >
              <Text>{getFormattedDateString(startDate.toString())}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInput}>
            <Text style={styles.introText}>Gültigkeitsdauer:</Text>
            <TouchableOpacity
              style={styles.numberInputText}
              onPress={askForValidPeriod}
            >
              <Text>{duration === -1 ? "" : duration}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: tipFinished ? "#53f" : "#ccf" },
            ]}
            onPress={useTip}
            disabled={!tipFinished}
          >
            <View style={{ flex: 1 }} />
            <Text style={styles.buttonText}>Anwenden</Text>
            <View style={{ flex: 1 }} />
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstNumberLine: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 5,
  },
  numberLine: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  superZahlLine: {
    flexDirection: "row",
    //height: 40,
    marginTop: 5,
    marginHorizontal: 5,
  },
  button: {
    margin: 10,
    height: 44,
    borderRadius: 22,
  },
  buttonText: {
    color: "#ffe",
    textAlign: "center",
  },
  textInput: {
    flexDirection: "row",
    padding: 10,
  },
  introText: {
    fontWeight: "600",
    fontSize: 16,
  },
  numberInputText: {
    marginLeft: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    fontSize: 16,
    flex: 1,
  },
});
