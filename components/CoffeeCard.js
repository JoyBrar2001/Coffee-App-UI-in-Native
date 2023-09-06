import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { themeColors } from '../theme/themeColors';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

FontAwesome.loadFont();
Entypo.loadFont();

const CoffeeCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      borderRadius: 40,
      backgroundColor: themeColors.bgDark,
      height: 350,
      width: 250,
      overflow: 'visible',
    }}>
      <View
        style={{
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
        }}
        className='flex-row justify-center -mt-14'
      >
        <Image source={item.image} className='h-40 w-40' />
      </View>
      <View className='px-5 mt-5 space-y-3'>
        <Text className='text-3xl text-white font-semibold z-10'>
          {item.name}
        </Text>
        <View 
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          className='flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16'
        >
          <FontAwesome name="star" size={15} color="white" />
          <Text className='text-base font-semibold text-white'>{item.stars}</Text>
        </View>
        <View className='flex-row space-x-1 z-10 mb-6'>
          <Text className='text-base text-white font-semibold opacity-60'>
            Volume
          </Text>
          <Text className='text-base text-white font-semibold'>
            {item.volume}
          </Text>
        </View>

        <View
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}
          className='flex-row justify-between items-center'
        >
          <Text className='text-white font-bold text-lg'>$ {item.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product', {...item})}
            style={{
              shadowColor: '#000000',
              shadowRadius: 5,
              shadowOffset: { width: 0, height: -0 },
              shadowOpacity: 1,
            }}
            className='p-3 bg-white rounded-full'
          >
            <Entypo name="plus" size={25} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CoffeeCard;