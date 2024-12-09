import React, { useState } from 'react';
import { View, Image, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { useRoute, useNavigation } from '@react-navigation/native';
import { theme, styles } from '../themes';

const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

const MovieScreen = () => {
  const { params: { item } } = useRoute();
  const navigation = useNavigation();
  const [Favroute, toogleFavroute] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ width: '100%' }}>
        <SafeAreaView style={{ position: 'absolute', zIndex: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginTop: topMargin }}>
          <TouchableOpacity style={styles.background} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toogleFavroute(!Favroute)}>
            <HeartIcon size={35} color={Favroute ? theme.background : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
        <Image source={require('../assets/moviePoster2.png')} style={{ width: '100%', height: 400 }} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
