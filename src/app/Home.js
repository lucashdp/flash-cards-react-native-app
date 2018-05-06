import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DeckList from '../deck/DeckList';

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Decks'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <DeckList navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;