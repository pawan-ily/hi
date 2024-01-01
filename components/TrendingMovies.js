import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TrendingMovies = ({data})=>{
  const navigation =useNavigation();
  const handleClick =(items)=>
  {
  
   navigation.navigate('Movie',items);  
  }
  return (
    <View className="mb-8  mt-7">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel data={data} renderItem={
        ({item})=><MovieCard  handleClick={handleClick}  items={item}/>} 
      sliderWidth={600}
      sliderHeight={400}
      itemWidth={200}
      slideStyle={{display:'flex',alignItems:'center'}}/>
      </View>
  )
}

const MovieCard=({items,handleClick})=>{
    return(
       <TouchableWithoutFeedback onPress={()=>handleClick(items)}  >
        <Image source={require('../assets/moviePoster1.png')} 
        style={{width:150,height:100}}
        className="rounded-3xl"/>
       </TouchableWithoutFeedback>
    )
}
export default TrendingMovies;
