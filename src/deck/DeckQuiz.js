import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
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

import { actionGetDecks, actionLoading } from './action'

class DeckQuiz extends Component {
    render() {
        console.log('[DECK QUIZ] RENDER');
        console.log('props: ' + JSON.stringify(this.props));

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Quiz</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={this.props.deck.questions}
                        renderEmpty={() =>
                            <View style={{ alignSelf: "center" }}>
                                <Text>Over</Text>
                            </View>}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Quiz</Text>
                                            <Text note> {this.props.deck.questions.indexOf(item) + 1} / {this.props.deck.questions.length}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <H1 style={{ height: 100, flex: 1 }}>
                                        {item.question}
                                    </H1>
                                </CardItem>
                                <CardItem>
                                    <Left></Left>
                                    <Body>
                                        <Button transparent>
                                            <Text>Answer</Text>
                                        </Button>
                                    </Body>
                                    <Right></Right>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button onPress={() => this._deckSwiper._root.swipeLeft()}>
                                            <Icon name="arrow-back" />
                                        </Button>
                                    </Left>
                                    <Body></Body>
                                    <Right>
                                        <Button onPress={() => this._deckSwiper._root.swipeRight()}>
                                            <Icon name="arrow-forward" />
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                    <Button danger onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Text>Incorrect</Text>
                    </Button>
                    <Button success onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>Correct</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

function mapStateToProps(state, { navigation }) {

    return {
        deck: navigation.state.params.deck
    }
}

export default connect(mapStateToProps)(DeckQuiz);