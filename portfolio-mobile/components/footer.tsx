import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {new Date().getFullYear()} PWM Portfolio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{padding:16,alignItems:'center',backgroundColor:'#0b1220'},
  text:{color:'#9ca3af'}
});
