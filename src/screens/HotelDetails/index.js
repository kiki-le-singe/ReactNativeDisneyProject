import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import screensStyles from '../styles/screens';

export default class HotelDetails extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={screensStyles.safeAreaView}>
        <View style={screensStyles.viewContainer}>
          <Text>HotelDetails Screen - {this.props.navigation.getParam('hotelId')}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
