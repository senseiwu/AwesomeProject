import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.renderWelcome();
  }

  renderWelcome() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome boss to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        // <MapView
        //   style={ styles.map }
        //   initialRegion={{
        //     latitude: 37.78825,
        //     longitude: -122.4324,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421,
        //   }}
        // />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  // map: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

module.exports = Welcome;
