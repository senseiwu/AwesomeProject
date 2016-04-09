import React, {
  Text,
  View,
  ListView,
  TouchableOpacity,
  StyleSheet,
  Component
} from 'react-native'

var Welcome = require('./Welcome')
var AllMoviesList = require('./AllMoviesList')

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2,}),
      viewsMap: {'Welcome':Welcome, "AllMoviesList":AllMoviesList}
    }
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(['Welcome', 'AllMoviesList'])
    })
  }

  _pushTo(name) {
    this.props.navigator.push({
      component: this.state.viewsMap[name],
      title:name,
      context: this.props,
    });
  }

  _renderRow(name) {
    return (
      <TouchableOpacity
        key={name}
        // onPress={this._pushTo.bind(this,name)}
        onPress={() => this._pushTo(name)}
      >
        <View style={styles.row}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
        renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator}/>}
      />
    )
  }
}

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 5,
    backgroundColor: '#CCCCCC',
  },
  text: {
    flex: 1,
  }
})

module.exports = Main;
