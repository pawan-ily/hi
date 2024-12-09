import { View, Text, Platform, ScrollView ,Image} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { styles } from '../themes';
import { useState } from 'react';
import { theme } from '../themes';

const ios = Platform.OS=='ios';
const topMargin= ios?'':'mt-3';

const MovieScreen = () => {
    const{params:item}= useRoute();
    const navigation = useNavigation();
    const[Favroute,toogleFavroute]=useState('false');
  return(
  <ScrollView
  contentContainerStyle={{paddingBottom:20}}
  className="flex-1 bg-neutral-900">
    <View className="w-full  "  >
        <SafeAreaView className={" absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
          <TouchableOpacity style={styles.background} className="rounded-xl p-1"onPress={()=>navigation.goBack()}><ChevronLeftIcon size="28" strokeWidth={2.5}  color={"white"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toogleFavroute(!Favroute)}>
                 <HeartIcon size="35"    color={Favroute?theme.background:"white"}/>
                </TouchableOpacity> 
        </SafeAreaView>
        <View >
            <Image    source={require('../assets/moviePoster2.png')} />
            </View>
    </View>
  </ScrollView>
  )
}
export default MovieScreen