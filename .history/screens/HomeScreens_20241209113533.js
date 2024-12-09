import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import {Bars3CenterLeftIcon} from "react-native-heroicons/outline"
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { styles } from '../themes'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
const HomeScreens = () => {
    const [trending,setTrending] = useState([1,2,3]);
    const [upcoming,setUpcoming] = useState([1,2,3,4,5,6]);
    const ios = Platform.OS =='ios';
  return (
  <View className="flex-1 bg-neutral-900 " >
    <SafeAreaView >
        <StatusBar style={"light"}/>
        <View className="flex-row justify-between items-center mx-4">
        <Bars3CenterLeftIcon color={"white"}  size={30}  strokeWidth={2}/>
        <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>OVIES
            </Text>
            <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"}/>
            </TouchableOpacity>
        </View>
</SafeAreaView>
<ScrollView showsVerticalScrollIndicator={false}
contentContainerStyle={{paddingBottom:10}}>
    <TrendingMovies   data={trending}/>
    <MovieList title={"UpComing"} data={upcoming}/>
    <MovieList title={"TopRated"} data={upcoming}   />
    </ScrollView>

  </View>
  )
}
export default HomeScreens