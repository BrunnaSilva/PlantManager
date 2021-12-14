import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, Dimensions } from 'react-native';
import wateringImage from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts'
import { ButtonNext } from '../components/ButtonNext'
import { useNavigation } from '@react-navigation/core';

export function Welcome() {
 const navigation = useNavigation()

 function handleStart(){
   navigation.navigate('UserIdentification')
 }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Gerencie {"\n"}
        suas plantas de{"\n"}
        forma fácil</Text>
        <Image source={wateringImage} style={styles.image} resizeMode='contain'/>
        <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
        <View style={styles.buttonContainer}>
          <ButtonNext onPress={handleStart}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 58,
    fontFamily: fonts.heading
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image:{
      height: Dimensions.get('window').width * 0.7
  },
  buttonContainer: {
    paddingBottom: 20
  }
});
