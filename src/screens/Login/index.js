import React, { Fragment } from 'react';
import { Text, Button, TextInput, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from 'Apps/src/utils/colors';
import * as userActions from 'Apps/src/redux/actions/user';
import Loader from 'Apps/src/components/Loader';
import styles from './LoginStyles';
import screensStyles from '../styles/screens';

export class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  _handleSignIn = () => {
    const { username, password } = this.state;

    if (!username || !password) {
      return alert('Veuillez remplir les champs');
    }

    this.props.signInUser({ username, password });
  }

  _handleSignOut = () => {
    this.props.signOutUser();
  }

  _renderContent = () => {
    const { user } = this.props;
    const { username, password } = this.state;
    const { loading, isConnected } = user;

    if (loading) {
      return <Loader loading />;
    }

    if (!isConnected) {
      return (
        <Fragment>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(_username) => this.setState({ username: _username })}
            value={username}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(_password) => this.setState({ password: _password })}
            value={password}
            secureTextEntry
          />
          <Button title="Sign In" onPress={this._handleSignIn} color={colors.white} />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <View style={styles.avatar}/>
          <Text>{user.info.username}</Text>
          <Button title="Sign Out" onPress={this._handleSignOut} color={colors.red} />
        </Fragment>
      )
    }
  }

  render() {
    return (
      <SafeAreaView style={screensStyles.safeAreaView}>
        <View style={[screensStyles.viewContainer, styles.viewContainer]}>
          {this._renderContent()}
        </View>
      </SafeAreaView>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  signInUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = dispatch => ({
  signInUser: (user) => dispatch(userActions.signInUser(user)),
  signOutUser: (user) => dispatch(userActions.signOutUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
