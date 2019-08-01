import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';

import screensStyles from '../styles/screens';

export default class CartDetails extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={screensStyles.safeAreaView}>
        <View style={screensStyles.viewContainer}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      </SafeAreaView>
    );
  }
}
