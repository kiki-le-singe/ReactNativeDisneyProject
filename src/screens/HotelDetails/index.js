import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import screensStyles from '../styles/screens';

export default class HotelDetails extends React.Component {
  render() {
    return (
      <SafeAreaView style={screensStyles.safeAreaView}>
        <View style={screensStyles.viewContainer}>
          <Text>HotelDetails Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
