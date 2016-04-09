import React, {
  AppRegistry,
  Component,
  Navigator,
  BackAndroid
} from 'react-native'

var Main = require('./app/Main')

class AwesomeProject extends Component {

  _registerAndroidBack(navigator) {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (navigator.getCurrentRoutes().length === 1  ) {
        return false;
      }
      navigator.pop();
      return true;
    })
  }

  render() {
    return (
      <Navigator
        initialRoute = {{
          component: Main,
          title: 'Main'
        }}
        renderScene = {(route, navigator) => {
          this._registerAndroidBack(navigator)
          var RC = route.component
          return (
            <RC
              style={{ flex: 1, }}
              navigator={navigator}
              appName = 'SENSEIWUhackers'
              route={route} />
          )
        }}
        />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
