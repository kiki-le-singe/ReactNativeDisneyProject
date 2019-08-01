import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from 'Apps/src/utils/colors';
import HeaderRight from 'Apps/src/components/HeaderRight';
import HeaderLeft from 'Apps/src/components/HeaderLeft';
import * as hotelsActions from '../../redux/actions/hotels';
import * as cartActions from '../../redux/actions/cart';
import screensStyles from '../styles/screens';
import HotelCard from '../../components/HotelCard';
import Loader from '../../components/Loader';

export class Home extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'LOGO',
      headerStyle: {
        backgroundColor: colors.grey,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: (<HeaderLeft navigation={navigation} />),
      headerRight: (<HeaderRight navigation={navigation} />),
    };
  };

  componentDidMount() {
    const { getHotels } = this.props;

    getHotels();
  }

  _keyHotelItemCardExtractor = (item) => `hotelCard_${item.id}`;

  _renderHotelItemCard = ({ item }) => {
      const { navigation, addToCart, removeToCart, cart } = this.props;
      const { hotelIds } = cart;
      const isAddedToCart = hotelIds.includes(item.id);

      return (
        <HotelCard
          hotel={item}
          navigation={navigation}
          addToCart={addToCart}
          removeToCart={removeToCart}
          isAddedToCart={isAddedToCart}
        />
    );
  }

  render() {
    const { hotels } = this.props;
    const { loading, success, list } = hotels;

    if (loading) {
      return <Loader loading />;
    }

    return success ? (
      <SafeAreaView style={screensStyles.safeAreaView}>
        <View style={screensStyles.viewContainer}>
          <FlatList
            style={screensStyles.flatListContainer}
            data={list}
            keyExtractor={this._keyHotelItemCardExtractor}
            renderItem={this._renderHotelItemCard}
          />
        </View>
      </SafeAreaView>
    ) : null;
  }
}

Home.propTypes = {
  getHotels: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
  hotels: PropTypes.object,
};

const mapStateToProps = ({ hotels, cart }) => ({
  hotels,
  cart,
});
const mapDispatchToProps = dispatch => ({
  getHotels: () => dispatch(hotelsActions.getHotels()),
  addToCart: (hotel) => dispatch(cartActions.addToCart(hotel)),
  removeToCart: (hotel) => dispatch(cartActions.removeToCart(hotel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
