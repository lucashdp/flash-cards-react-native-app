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

import { actionSetAnswer } from './action';
import { getDecks } from './reducer';

class DeckQuiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAnswer: false
        }
    }

    answer = (answer, question) => {
        this.props.dispatch(actionSetAnswer(answer, this.props.deck, question));
        this._deckSwiper._root.swipeRight();
    }

    render() {
        console.log('[DECK QUIZ] RENDER');
        console.log('props: ' + JSON.stringify(this.props));

        const showAnswer = this.state.showAnswer;

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
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={this.props.deck.questions.filter((question) => {
                            return (!question.answered)
                        })}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Quiz</Text>
                                            <Text note> {this.props.deck.questions.indexOf(item) + 1} / {this.props.deck.questions.length}</Text>
                                        </Body>
                                        <Right>
                                            <Text style={{ color: "#0086b3" }}>{this.props.deck.progress} % done</Text>
                                        </Right>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                </CardItem>
                                {!showAnswer ?
                                    (
                                        <CardItem cardBody>
                                            <H1 style={{ height: 100, flex: 1 }}>
                                                {item.question}
                                            </H1>
                                        </CardItem>
                                    )
                                    :
                                    (
                                        <CardItem cardBody>
                                            <Left></Left>
                                            <Body>
                                                <H1 style={{ height: 100, flex: 1 }}>
                                                    {item.answer}
                                                </H1>
                                            </Body>
                                            <Right></Right>
                                        </CardItem>
                                    )}
                                <CardItem>
                                    <Left></Left>
                                    <Body>
                                        <Button transparent onPress={() => { this.setState({ showAnswer: !showAnswer }) }}>
                                            <Text>{!showAnswer ? 'Answer ' : 'Question'}</Text>
                                        </Button>
                                    </Body>
                                    <Right></Right>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button danger onPress={() => this.answer(false, item)}>
                                            <Text>Incorrect</Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Button success onPress={() => this.answer(true, item)}>
                                            <Text>Correct</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    return {
        decks: getDecks(state),
        deck: navigation.state.params.deck
    }
}

export default connect(mapStateToProps)(DeckQuiz);