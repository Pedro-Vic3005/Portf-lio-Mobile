import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Footer from '../components/footer';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={{flex:1}}>
        <Header />
        <Hero />
        <About />
        <Footer />
      </View>
    </ScrollView>
  );
}
