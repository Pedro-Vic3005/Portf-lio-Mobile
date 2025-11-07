import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const sample = require('../assets/image.png');

export default function Hero(){
  return (
    <View style={styles.container}>
      <Image source={sample} style={styles.image} resizeMode='contain' />
      <Text style={styles.name}>Pedro Araújo</Text>
      <Text style={styles.role}>Portfólio - Desenvolvedor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{alignItems:'center',padding:24,backgroundColor:'#0b1220'},
  image:{width:140,height:140,borderRadius:70,marginBottom:12},
  name:{fontSize:22,color:'#fff',fontWeight:'700'},
  role:{fontSize:14,color:'#cbd5e1',marginTop:6}
});
