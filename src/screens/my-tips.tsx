import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TipList } from '../views/TipList';

export function MyTips() {
  const [myTips, setMyTips] = useState(null);

  const readMyTips = useCallback(async () => {
    try {
      const tips = await AsyncStorage.getItem('myTips');
  
      setMyTips(tips);
    } catch ( error ) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    readMyTips();
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column"
    }}> 
      <TouchableOpacity style={{backgroundColor: "#7f7", textAlign: 'center', }}>
        <Text>Neue Tipps hinzufügen</Text>
      </TouchableOpacity>
      {myTips === null ? 
        <Text>Nix da...</Text> :
        <TipList items={myTips} style={{ flex: 2, backgroundColor: "#77f" }} />}
    </SafeAreaView>
  );
}