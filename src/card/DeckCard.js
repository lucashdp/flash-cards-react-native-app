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
    DeckSwiper,
    Card,
    CardItem,
    H1
} from 'native-base';

import { actionSetAnswer, actionLoading } from '../deck/action';

class DeckCard extends Component {
    constructor(props) {
        console.log('DeckCard constructor');

        super(props)

        this.state = {
            showAnswer: false
        }
    }

    answer = (answer, question) => {
        this.setState({ showAnswer: false });
        this.props.dispatch(actionSetAnswer(answer, this.props.deck, question));
        this.props.dispatch(actionLoading(!this.props.loading));
        // this._deckSwiper._root.swipeRight();
    }

    render() {
        console.log('DeckCard');
        const showAnswer = this.state.showAnswer;
        const { deck } = this.props;

        return (
            <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={deck.questions.filter((question) => {
                    return (!question.answered)
                })}
                renderItem={item =>
                    <Card style={{ elevation: 3 }}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Quiz</Text>
                                    <Text note> {deck.questions.indexOf(item) + 1} / {deck.questions.length}</Text>
                                </Body>
                                <Right>
                                    <Text style={{ color: "#0086b3" }}>{deck.progress} % done</Text>
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
        )
    }
}

function mapStateToProps(state) {
    console.log('LOOOOOOOOOOOOOOADIIIIIIIIIIING: ' + JSON.stringify(state.loading))
    console.log('STATE: ' + JSON.stringify(state))
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps)(DeckCard);