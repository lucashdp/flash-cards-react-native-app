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

import { actionSetAnswer } from './action'

class DeckQuiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAnswer: false
        }
    }

    answer = (answer) => {
        this.props.dispatch(actionSetAnswer(answer, this.props.deck));
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
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Quiz</Title>
                    </Body>
                    <Right>
                        <Title>{this.props.points} points</Title>
                    </Right>
                </Header>
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={this.props.deck.questions}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Quiz</Text>
                                            <Text note> {this.props.deck.questions.indexOf(item) + 1} / {this.props.deck.questions.length}</Text>
                                        </Body>
                                        <Right>
                                            <Text style={{ color: "#0086b3" }}>{this.props.progress} % done</Text>
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
                            </Card>
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                    <Button danger onPress={() => this.answer(false)}>
                        <Text>Incorrect</Text>
                    </Button>
                    <Button success onPress={() => this.answer(true)}>
                        <Text>Correct</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    return {
        deck: navigation.state.params.deck,
        points: state.points,
        progress: state.progress
    }
}

export default connect(mapStateToProps)(DeckQuiz);