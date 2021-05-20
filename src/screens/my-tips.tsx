// @ts-ignore
import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TipList } from '../views/TipList';
import { useIsFocused } from '@react-navigation/native';
import { Tip } from "../models/tip";

export function MyTips({ navigation }) {
  const [myTips, setMyTips] = useState(null);
  const isFocused = useIsFocused();

  const readMyTips = useCallback(async () => {
    try {
      const tipsJson = await AsyncStorage.getItem('myTips');

      const tips = JSON.parse(tipsJson);
      setMyTips(tips);
    } catch ( error ) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    isFocused && readMyTips();
  }, [isFocused]);

  const openAddTip = () => {
    navigation.navigate('Add Tip');
  };

  const removeTip = async (tip: Tip) => {
    try {
      const tipsJson = await AsyncStorage.getItem('myTips');
      let currentTips: Tip[] = JSON.parse(tipsJson);

      console.log(333, currentTips);

      if (currentTips && myTips.includes(tip)) {
        currentTips.splice(currentTips.indexOf(tip), 1);

        await AsyncStorage.setItem('myTips', JSON.stringify(currentTips));

        setMyTips(currentTips);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column"
    }}>
      {!myTips || myTips.length == 0 ?
        <Text>Nix da...</Text> :
        <TipList tips={myTips} style={{ margin: 10, }} removeTip={removeTip} />}
      <TouchableOpacity style={{margin: 10, width: 100, height: 44, borderRadius: 22, backgroundColor: "#7f7", textAlign: 'center', }}
                        onPress={openAddTip}>
        <Text style={{color: '#f73', textAlign: 'center', padding: 5,}}>Neue Tipps hinzufügen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
