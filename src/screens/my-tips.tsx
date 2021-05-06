import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';

export function MyTips() {
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: "column"
    }}>
      <View style={{ flex: 2, backgroundColor: "#77f" }} />
      <Text style={{backgroundColor: "#7f7", textAlign: 'center', }}>blablabla</Text>
      <View style={{ flex: 2, backgroundColor: "#f77" }} />
    </SafeAreaView>
  );
}