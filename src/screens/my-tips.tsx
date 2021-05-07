import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TipList } from '../views/TipList';

export function MyTips({ navigation }) {
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

  const openAddTip = () => {
    navigation.navigate('Add Tip');
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column"
    }}> 
      <TouchableOpacity style={{backgroundColor: "#7f7", textAlign: 'center', }} 
                        onPress={openAddTip}>
        <Text>Neue Tipps hinzufügen</Text>
      </TouchableOpacity>
      {myTips === null ? 
        <Text>Nix da...</Text> :
        <TipList items={myTips} style={{ flex: 2, backgroundColor: "#77f" }} />}
    </SafeAreaView>
  );
}