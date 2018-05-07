import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Left, Right, Title } from 'native-base';
import DeckList from '../deck/DeckList';
import { StatusBar } from 'native-base';

class Home extends Component {
    static navigationOptions = {
        headerMode: 'none'
    };

    render() {
        return (
            <Container>
                <DeckList navigation={this.props.navigation} />
            </Container>
        );
    }
}

export default Home;