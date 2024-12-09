import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../themes';

const MovieList = ({ title, data }) => {
  const navigation = useNavigation();
  const movieName = 'Ant-Man and the Wasp: Quantumania';

  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('Movie', item)}>
            <View style={{ marginRight: 16, alignItems: 'center' }}>
              <Image source={require('../assets/moviePoster2.png')} style={{ width: 200, height: 200 }} />
              <Text style={{ color: 'white', marginTop: 8 }}>
                {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
