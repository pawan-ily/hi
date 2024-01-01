import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { styles } from '../themes'
import { useNavigation } from '@react-navigation/native'
const MovieList = ({title,data}) => {
  const navigation = useNavigation();
  let moviename = "Ant-Man and the Wasp:Quantumania";
  return (
    <View className="mb-8 space-y-4"  >
     <View className="flex-row justify-between  items-center">
      <Text className=" text-white text-lg mx-4 ">{title}</Text>
      <TouchableOpacity>
        <Text style={styles.text}   className= "text-lg">
          See all
        </Text>
      </TouchableOpacity>
     </View>
     <ScrollView horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingHorizontal:15}}>
      {
      data.map((item,index)=>{
        return(
          <TouchableNativeFeedback onPress={()=>navigation.navigate('Movie',item)}  >
              <View className="space-y-1  mr-4"
              key={index}
              >
                <Image
                source={require('../assets/moviePoster2.png')}
                style={{width:200,height: 200}}
                />
                <Text className="text-neutral-300">
                  {
                  moviename.length>14?moviename.slice(0,14)+'...':moviename
                  }
                </Text>
              </View>
            </TouchableNativeFeedback>
        )
      })}
     </ScrollView>
    </View>
  )
}
export default MovieList
