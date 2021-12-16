import React  from 'react';
import { Text, SafeAreaView, Image, View } from 'react-native';
import wateringImage from '../assets/watering.png'
import { ButtonNext } from '../components/ButtonNext'
import { useNavigation } from '@react-navigation/core';
import Style from './Welcome.style'

export function Welcome() {
 const navigation = useNavigation()
 const styles = Style

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
