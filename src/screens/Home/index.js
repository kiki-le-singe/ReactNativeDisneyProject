import React from 'react';
import { SafeAreaView, Button, View, Text } from 'react-native';

import screensStyles from '../styles/screens';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={screensStyles.safeAreaView}>
        <View style={screensStyles.viewContainer}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('HotelDetails')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
