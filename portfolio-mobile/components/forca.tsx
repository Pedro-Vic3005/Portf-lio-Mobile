import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forca(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      <Text style={styles.text}>Componente convertido — você pode integrar a lógica aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{padding:20,backgroundColor:'#fff'},
  title:{fontSize:18,fontWeight:'700',marginBottom:8},
  text:{fontSize:14,color:'#374151'}
});
