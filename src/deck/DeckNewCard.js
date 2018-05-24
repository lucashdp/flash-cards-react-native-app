import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Left,
    Body,
    Right,
    Title,
    Button,
    Icon,
    Text,
    Footer,
    FooterTab
} from 'native-base';

import { actionSaveCard } from './action';

class DeckNewCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: '',
            answer: '',
            valid: 'none'
        }
    }

    saveCard = () => {
        if (this.state.question === '' || this.state.answer === '')
            this.setState({ valid: false })

        if (this.state.question !== '' && this.state.answer !== '') {
            const card = {
                question: this.state.question,
                answer: this.state.answer,
                answered: false
            }

            const deck = this.props.deck;

            this.props.dispatch(actionSaveCard(deck, card));
            this.props.navigation.navigate('Deck', { deck });
        }
    }

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
                        <Title>New Card</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel error={!this.state.valid && this.state.question === ''}>
                            <Label>What is the question ?</Label>
                            <Input onChangeText={(question) => this.setState({ question })}
                                value={this.state.question} />
                        </Item>
                        <Item floatingLabel error={!this.state.valid && this.state.answer === ''}>
                            <Label>What is the answer ?</Label>
                            <Input onChangeText={(answer) => this.setState({ answer })}
                                value={this.state.answer} />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full onPress={() => this.saveCard()}>
                            <Text>Salvar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

function mapStateToProps(state, { navigation }) {
    return {
        deck: navigation.state.params.deck
    }
}

export default connect(mapStateToProps)(DeckNewCard);