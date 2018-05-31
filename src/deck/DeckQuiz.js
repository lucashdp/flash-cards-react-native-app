import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body,
    Left,
    Right,
    Title,
    Button,
    Icon,
    View,
    DeckSwiper,
    Card,
    CardItem,
    H1
} from 'native-base';

import DeckCard from '../card/DeckCard';
import { getDecks } from './reducer';

class DeckQuiz extends Component {
    render() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.navigate('Deck', { deck: this.props.deck }) }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Quiz</Title>
                    </Body>
                    <Right>
                        <Title>{this.props.deck.points} points</Title>
                    </Right>
                </Header>
                <View>
                    <DeckCard deck={this.props.deck} loading={this.props.loading} navigation={this.props.navigation} />
                </View>
            </Container>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    return {
        decks: getDecks(state),
        deck: navigation.state.params.deck,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(DeckQuiz);