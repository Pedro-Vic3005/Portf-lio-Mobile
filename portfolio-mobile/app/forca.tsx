import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ForcaComp from '../components/forca';

export default function Forca() {
  return (
    <ScrollView contentContainerStyle={{flexGrow:1,padding:16}}>
      <ForcaComp />
    </ScrollView>
  );
}
