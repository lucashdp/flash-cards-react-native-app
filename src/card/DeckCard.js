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
    H1,
    Icon,
    View
} from 'native-base';

import { actionSetAnswer, actionLoading, actionStartQuiz } from '../deck/action';

import { clearLocalNotification, setNotification } from '../../utils/localNotification'

class DeckCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAnswer: false
        }
    }

    answer = (answer, question) => {
        this.setState({ showAnswer: false });
        //to do: se ultima resp, limpar o notification

        let number = 0;
        this.props.deck.questions.forEach((question) => {
            if (!question.answered)
                number++;
        });

        if (number === 1)
            clearLocalNotification()
                .then(setNotification());

        this.props.dispatch(actionSetAnswer(answer, this.props.deck, question));
        this.props.dispatch(actionLoading(!this.props.loading));
        // this._deckSwiper._root.swipeRight();
    }

    restartQuiz = () => {
        this.props.dispatch(actionStartQuiz(this.props.deck));
        this.props.dispatch(actionLoading(!this.props.loading));
        this.props.deck.questions.filter((question) => {
            return (!question.answered)
        })
    }

    render() {
        const showAnswer = this.state.showAnswer;
        const { deck } = this.props;
        const questions = this.props.deck.questions.filter((question) => {
            return (!question.answered)
        });

        if (questions != undefined && questions.length > 0) {
            return (
                <DeckSwiper
                    ref={(c) => this._deckSwiper = c}
                    dataSource={questions}
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
                                )
                            }
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
        } else {
            return (
                <View style={{ alignSelf: "center" }}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Quiz</Text>
                                </Body>
                                <Right>
                                    <Text style={{ color: "#0086b3" }}>{deck.progress} % done</Text>
                                </Right>
                            </Left>
                        </CardItem>

                        <CardItem>
                        </CardItem>

                        <CardItem cardBody>
                            <H1>CONGRATULATIONS !! YOU FINISHED !</H1>
                        </CardItem>

                        <CardItem>
                        </CardItem>

                        <CardItem>
                            <Left></Left>
                            <Body>
                                <Button dark onPress={() => { this.restartQuiz() }}>
                                    <Icon type="MaterialCommunityIcons" name="restart" />
                                    <Text>Restart Quiz</Text>
                                </Button>
                            </Body>
                            <Right></Right>
                        </CardItem>
                    </Card>
                </View>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(DeckCard);