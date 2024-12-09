import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate('Movie', { item });
  };

  return (
    <View style={{ marginBottom: 32, marginTop: 28 }}>
      <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 16, marginBottom: 12 }}>
        Trending
      </Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
        sliderWidth={600}
        sliderHeight={400}
        itemWidth={200}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

const MovieCard = ({ item, handleClick }) => (
  <TouchableWithoutFeedback onPress={() => handleClick(item)}>
    <Image
      source={require('../assets/moviePoster1.png')}
      style={{ width: 150, height: 100, borderRadius: 16 }}
    />
  </TouchableWithoutFeedback>
);

export default TrendingMovies;
