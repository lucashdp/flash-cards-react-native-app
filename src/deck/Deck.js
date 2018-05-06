import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actionGetDecks, actionLoading } from './action'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  render() {
    console.log('[DECK] RENDER');
    console.log('props: ' + JSON.stringify(this.props));

    return (
      <View style={styles.container}>
        <Text style={styles.center} key={'title'}>teste</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 25
  },
  box: {
    height: 50,
    width: 200,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  center: {
    textAlign: 'center',
  }
})

function mapStateToProps(state, { navigation }) {

  return {
    title: navigation.state.params.title
  }
}

export default connect(mapStateToProps)(Deck);