import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { themeColors } from '../theme/themeColors';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { categories, coffeeItems } from '../constants/data';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/CoffeeCard';

Entypo.loadFont();

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className='flex-1 bg-white relative'>
      <StatusBar />
      <Image
        source={require('../assets/images/beansBackground1.png')}
        className='w-full absolute -top-5 opacity-10'
        style={{ height: 220 }}
      />

      <SafeAreaView className='flex-1 mt-12'>
        <View className='px-4 flex-row justify-between items-center'>
          <Image
            source={require('../assets/images/avatar.png')}
            className='h-9 w-9 rounded-full'
          />

          <View className='flex-row items-center space-x-2'>
            <Entypo name="location-pin" size={25} color={themeColors.bgLight} />
            <Text className='text-base font-semibold'>New York, NYC</Text>
          </View>

          <Feather name="bell" size={24} color="black" />
        </View>

        <View className='mx-5 mt-14'>
          <View className='flex-row justify-center rounded-full p-1 bg-[#e6e6e6]'>
            <TextInput placeholder='Search..' className='px-4 py-2 flex-1 font-semibold text-gray-700' />
            <TouchableOpacity className='rounded-full p-3 justify-center items-center' style={{ backgroundColor: themeColors.bgLight }}>
              <Entypo name="magnifying-glass" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className='px-5 mt-6'>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            className='overflow-visible'
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{ backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)' }}
                  className='p-4 px-5 rounded-full mr-2 shadow'
                >
                  <Text className={`font-semibold ${activeTextClass}`}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View className='py-2'>
          <Carousel 
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: 'flex', alignItems: 'center', overflow: 'visible', paddingTop: 64 }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;