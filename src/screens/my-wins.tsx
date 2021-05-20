// @ts-ignore
import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';

export function MyWins() {
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column"
    }}>
      <View style={{ flex: 2, backgroundColor: "gold" }} />
      <Text style={{backgroundColor: "#d0d0d0", textAlign: 'center', }}>108.7436.783 €</Text>
      <View style={{ flex: 2, backgroundColor: "gold" }} />
    </SafeAreaView>
  );
}
