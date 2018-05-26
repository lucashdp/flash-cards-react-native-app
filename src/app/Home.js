import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Left, Right, Title, Icon, Fab } from 'native-base';
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
                <Fab
                    active={false}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => { this.props.navigation.navigate('NewDeck') }}>
                    <Icon name="add" />
                </Fab>
            </Container>
        );
    }
}

export default Home;