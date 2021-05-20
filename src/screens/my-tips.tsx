// @ts-ignore
import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TipList } from '../views/TipList';
import { useIsFocused } from '@react-navigation/native';

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
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column"
    }}>
      {!myTips ?
        <Text>Nix da...</Text> :
        <TipList tips={myTips} style={{ margin: 10, }} />}
      <TouchableOpacity style={{margin: 10, width: 100, height: 44, borderRadius: 22, backgroundColor: "#7f7", textAlign: 'center', }}
                        onPress={openAddTip}>
        <Text style={{color: '#f73', textAlign: 'center', padding: 5,}}>Neue Tipps hinzufügen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
