import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator }  from 'react-native'

import { EnviromentButton } from '../components/EnviromentButton'
import { Header } from '../components/Header'
import { Load } from '../components/Load'
import { PlantCardPrimary } from '../components/PlantCardPrimary'
import api from '../services/api'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnviromentsProps{
    key: string,
    title: string
};
interface PlantProps{
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string],
    frequency: {
        times: number,
        repeat_every: string
    }
};

export function PlantSelect(){
    const navigation = useNavigation()
    const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([])
    const [enviromentsSelected, setEnviromentsSelected] = useState('all')
    const [plants, setPlants] = useState<PlantProps[]>([])
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
    const [loading, setLoading] = useState(true)

    //Paginação 
    const [page, setPage] = useState(1)
    const [loadingMore, setLoadindMore] = useState(false)

    //Salvar o nome para a Header
    const [userName, setUserName] = useState('')

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`)
        if(!data)
            return setLoading(true)
        if (page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        }else {
            setPlants(data)
            setFilteredPlants(data)
        }

        setLoading(false) 
        setLoadindMore(false)   
    }

    function handleEnviromentSelected(environment: string){
        setEnviromentsSelected(environment)

        if (environment == 'all')
            return setFilteredPlants(plants)
        const filtered = plants.filter(plant => 
            plant.environments.includes(environment))

        setFilteredPlants(filtered)
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave')

    }

    //paginação 
    function handleFetchMore(distance: number){
        if (distance < 1)
            return;
        setLoadindMore(true)
        setPage(oldValue => oldValue + 1)
        fetchPlants()
    }

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc')
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ])    
        }
        fetchEnviroment()
    }, [])

    useEffect(() => {
        fetchPlants()
    }, [])

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanage:user')
            setUserName(user || '')
        }
        loadStorageUserName()
    }, []) //Trazer o nome para a Header

    if(loading)
        return <Load/>
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header name={userName} emptyText={`${userName.substr(0,1)}`.toUpperCase()}/>
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
            </View>
            <View style={styles.listContainer}> 
                <FlatList 
                    keyExtractor={(item) => String(item.key)}
                    data={enviroments}
                    renderItem={({item}) => (
                        <EnviromentButton 
                            key={item.key}
                            title={item.title} 
                            active={item.key == enviromentsSelected}
                            onPress= {() => handleEnviromentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>

            <View style={styles.plants}>
                <FlatList
                    keyExtractor={(item) => String(item.id)}
                    data={filteredPlants}
                    renderItem={({item}) => (
                        <PlantCardPrimary
                            key={item.id} 
                            data={item}
                            onPress={() =>{handlePlantSelect(item)}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent ={ loadingMore ? <ActivityIndicator color={colors.green}/> : <></>}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.background,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    header:{
        paddingHorizontal: 20
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
    },
    listContainer:{
        marginTop: 18,
        marginBottom: 18
    },
    enviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginRight: 32
    },
    plants:{
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center'
    }
})