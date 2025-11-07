import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        Este é o portfólio convertido para React Native usando Expo Router. Mantive o design e as cores do projeto web.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{padding:20,backgroundColor:'#fff'},
  title:{fontSize:18,fontWeight:'700',marginBottom:8},
  text:{fontSize:14,lineHeight:20,color:'#374151'}
});
