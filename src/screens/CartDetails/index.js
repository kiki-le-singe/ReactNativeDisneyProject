import React, { Fragment } from 'react';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HotelCardMini from 'Apps/src/components/HotelCardMini';
import styles from './CartDetailsStyles';
import screensStyles from '../styles/screens';

export class CartDetails extends React.PureComponent {
  _renderHotels = () => {
      const { hotels, cart, navigation } = this.props;
      const { list } = hotels;
      const { hotelIds } = cart;

      // get the elements from hotel list that are in the cart
      const hotelsInCart = list.filter(hotel => hotelIds.includes(hotel.id));

      return hotelsInCart.map((hotel) => {
        return (
          <HotelCardMini key={`hotel_${hotel.id}`} hotel={hotel} navigation={navigation} />
        );
      });
  }

  _renderContent = () => {
      const { cart } = this.props;
      const { hotelIds, total } = cart;

      if (!hotelIds.length) {
        return (<Text>Votre panier est vide</Text>);
      }

      return (
        <Fragment>
          {this._renderHotels()}

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>{total} $</Text>
          </View>
        </Fragment>
      );
  }

  render() {
    return (
      <SafeAreaView style={screensStyles.safeAreaView}>
        <ScrollView>
          <View style={[screensStyles.viewContainer, styles.viewContainer]}>
            {this._renderContent()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

CartDetails.propTypes = {
  hotels: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels, cart }) => ({
  hotels,
  cart,
});

export default connect(mapStateToProps)(CartDetails);
