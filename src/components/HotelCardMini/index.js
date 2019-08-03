import React from 'react';
import { TouchableHighlight, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import images from 'Apps/src/utils/images';
import styles from './hotelCardMiniStyles';

const HotelCardMini = ({ hotel, navigation }) => {
  const { id, title, price } = hotel;

  const goToHotelDetailsScreen = () => {
    navigation.navigate('HotelDetails', { hotelId: id });
  };

  return (
    <TouchableHighlight underlayColor="transparent" onPress={goToHotelDetailsScreen}>
      <View style={styles.container}>
        <Image style={styles.image} source={images[`hotel${id}`]} />

        <View style={styles.rightContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}${'\n'}<Text style={styles.priceText}>prix/nuit</Text></Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

HotelCardMini.propTypes = {
  hotel: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default HotelCardMini;
