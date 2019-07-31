import React from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import PropTypes from 'prop-types';

import styles from './hotelCardStyles';

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

  render() {
    const { hotel } = this.props;
    const { isAdded } = this.state;
    const titleButton = isAdded ? 'Remove' : 'Add';

    return hotel ? (
      <TouchableHighlight underlayColor="transparent" onPress={this._goToHotelDetailsScreen}>
        <View style={styles.container}>
          <Text>Coucou</Text>
          <Button
            title={titleButton}
            onPress={this._updateCart}
          />
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
