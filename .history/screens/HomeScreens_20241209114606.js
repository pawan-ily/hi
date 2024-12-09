import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Platform } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../themes';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5, 6]);
  const ios = Platform.OS === 'ios';

  return (
    <View style={{ flex: 1, backgroundColor: '#1f1f1f' }}>
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16 }}>
          <Bars3CenterLeftIcon color="white" size={30} strokeWidth={2} />
          <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
            <Text style={styles.text}>M</Text>OVIES
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <TrendingMovies data={trending} />
        <MovieList title="Upcoming" data={upcoming} />
        <MovieList title="TopRated" data={upcoming} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
