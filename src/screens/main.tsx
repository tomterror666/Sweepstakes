import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, } from 'react-native';
import { Info } from '../views/Info';
import { DigitalClock } from '../views/DigitalClock';
import { readResults } from '../requests/read-results';
import { Lottory } from '../models/lottory';
import { UIActivityIndicator } from 'react-native-indicators';

export function Main({ navigation }) {

  const [allNumbers, setAllNumbers] = useState(new Lottory);
  const [isLoading, setIsLoading] = useState(false);

  const getNumbers = useCallback(async (year) => {
    setIsLoading(true);
    
    const numbers: Lottory = await readResults(year);

    setIsLoading(false);
    setAllNumbers(numbers);
  }, [])

  useEffect(() => {
    getNumbers(2010);
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column"
    }}>
      {isLoading ? 
        <>
          <UIActivityIndicator color={'#f44'} count={16} size={32} />
        </> : 
        <>
          <DigitalClock />
          <Info style={{ backgroundColor: "#eee" }} />
        </>
      }
      <TouchableOpacity 
        style={{backgroundColor: "#7f7", flexDirection: "column", height: 44, textColor: '#fff' }}         
        onPress={() => { console.log('adf'); navigation.navigate('My Tips')}}>
          <View style={{ flex: 1, }} />
          <Text style={{ textAlign: 'center' }}>My Tips</Text>
          <View style={{ flex: 1, }} />
        </TouchableOpacity>
        <TouchableOpacity 
        style={{backgroundColor: "#7f7", flexDirection: "column", height: 44, textColor: '#fff' }}         
        onPress={() => { console.log('adf'); navigation.navigate('My Wins')}}>
          <View style={{ flex: 1, }} />
          <Text style={{ textAlign: 'center' }}>My Wins</Text>
          <View style={{ flex: 1, }} />
        </TouchableOpacity>
        <View style={{ flex: 1, backgroundColor: "#77f" }} />
    </SafeAreaView>
  );
}