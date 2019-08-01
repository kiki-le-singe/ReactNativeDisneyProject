import React from 'react';
import { View, Text, TouchableHighlight, Button, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './hotelCardStyles';
import images from 'Apps/src/utils/images';
import { substr } from 'Apps/src/utils/strings';
import mediaQueries from 'Apps/src/utils/mediaQueries';

export class HotelCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isAdded: props.isAddedToCart,
    };
  }

  _goToHotelDetailsScreen = () => {
    const { navigation, hotel } = this.props;

    navigation.navigate('HotelDetails', { hotelId: hotel.id });
  }

  _updateCart = () => {
    const { isAdded } = this.state;
    const { addToCart, removeToCart, hotel} = this.props;

    this.setState({ isAdded: !isAdded }, () => {
      !isAdded ? addToCart(hotel.id) : removeToCart(hotel.id);
    });
  }

  _renderUpdateCartButton = () => {
    const { isAdded } = this.state;
    const titleButton = isAdded ? '-' : '+';
    const stylesButton = isAdded ? styles.isAdded : styles.isNotAdded;

    return (
      <TouchableHighlight style={[styles.buttonContainer, stylesButton]} underlayColor="transparent" onPress={this._updateCart}>
        <View style={[styles.buttonContainer, stylesButton]}>
          <Text style={styles.buttonTitle}>{titleButton}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { hotel } = this.props;
    const { id, title, price, desc } = hotel;

    return hotel ? (
      <TouchableHighlight underlayColor="transparent" onPress={this._goToHotelDetailsScreen}>
        <View style={styles.container}>
          <View>
            <Image style={styles.image} source={images[`hotel${id}`]} />
            {this._renderUpdateCartButton()}
          </View>
          <View style={styles.rightContent}>
            <View style={styles.header}>
              <Text>{title}</Text>
              <Text style={styles.price}>{price}${'\n'}<Text style={styles.priceText}>prix/nuit</Text></Text>
            </View>
            <Text style={styles.desc}>{substr(desc, mediaQueries.isSmallScreen ? 100 : 250)}</Text>
          </View>
        </View>
      </TouchableHighlight>
    ) : null;
  }
}

HotelCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
  isAddedToCart: PropTypes.bool,
  hotel: PropTypes.object,
};

HotelCard.defaultProps = {
  isAddedToCart: false,
  hotel: null,
};

export default HotelCard;
