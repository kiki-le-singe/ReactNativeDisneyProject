import React, { Fragment } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import images from 'Apps/src/utils/images';
import screensStyles from '../styles/screens';
import styles from './hotelDetailsStyles';

export class HotelDetails extends React.PureComponent {
  _getCurrentHotel = () => {
    const { navigation, hotels } = this.props;

    // get the current hotel from hotel list
    return hotels.list.filter(_hotel => navigation.getParam('hotelId') === _hotel.id)[0];
  }

  _renderHotel = () => {
    const hotel = this._getCurrentHotel();
    const { title, desc, price, id } = hotel;

    return (
      <Fragment>
        <Image style={styles.image} source={images[`hotel${id}`]} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}$</Text>
        <Text style={styles.desc}>{desc}</Text>
      </Fragment>
    );
  }

  render() {
    return (
      <SafeAreaView style={[screensStyles.safeAreaView, styles.safeAreaView]}>
        <ScrollView>
          <View style={[screensStyles.viewContainer, styles.viewContainer]}>
            {this._renderHotel()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

HotelDetails.propTypes = {
  hotels: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels }) => ({
  hotels,
});

export default connect(mapStateToProps)(HotelDetails);
