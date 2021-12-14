import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { SvgFromUri } from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/Button';

export function PlantSave() {

  return (
    <ScrollView style={styles.container}>
        <View style={styles.plantContainer}>
            <SvgFromUri uri="" height={150} width={150}/>
            <Text style={styles.title}>Rosa Do Deserto</Text>
            <Text style={styles.about}>Gosta muito de Sol, deve ficar em um vaso que permita o escoamento de água.</Text>
        </View>
        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image source={waterdrop} style={styles.tipImage}/>
                <Text style={styles.tipText}>Oi, me regue</Text>
            </View>

            <Text style={styles.alertLabel}>
                Escolha um horário para ser lembrado:
            </Text>
        </View>
        <Button text="Cadastrar Planta" onPress={()=>{}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      //justifyContent: ''
  },
  title:{

  },
  about:{

  },
  controller: {

  },
  tipContainer:{

  },
  tipImage:{
       
  },
  tipText:{

  },
  alertLabel:{

  },
  plantContainer:{

  }

});
