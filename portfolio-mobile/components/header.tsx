import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PWM Portfolio</Text>
      <Text style={styles.subtitle}>Desenvolvedor Frontend</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{paddingTop:48,paddingHorizontal:20,paddingBottom:16,backgroundColor:'#0f172a'},
  title:{fontSize:24,color:'#fff',fontWeight:'700'},
  subtitle:{fontSize:14,color:'#9ca3af',marginTop:4}
});
