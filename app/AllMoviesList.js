import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class AllMoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL).then((response) => response.json()).then((data) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.movies),
        loaded: true,
      })
    }).done();
  }

  render() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    return this.renderListMovie();

  }

  renderOneMovie() {
    var movie = this.state.movies[0]
    return this.renderMovie(movie);
  }

  renderListMovie() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listStyle}
      />
    )
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    )
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image style={stylesMovie.thumbnail} source={{uri: movie.posters.thumbnail}} />
        <View style={stylesMovie.rightSide}>
          <Text style={stylesMovie.title}>{movie.title}</Text>
          <Text style={stylesMovie.year}>{movie.year}</Text>
        </View>
      </View>
    )
  }

}

function renderMoviewInfo() {
  var movie = MOCKED_MOVIES_DATA[0];
  return (
    <View style={styles.container}>
      <Image style={stylesMovie.thumbnail} source={{uri: movie.posters.thumbnail}} />
      <View style={stylesMovie.rightSide}>
        <Text style={stylesMovie.title}>{movie.title}</Text>
        <Text style={stylesMovie.year}>{movie.year}</Text>
      </View>
    </View>
  );
}

function renderWelcome() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

const stylesMovie = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  year: {
    fontSize: 14,
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightSide: {
    flex: 1,
  },
});

module.exports = AllMoviesList;
