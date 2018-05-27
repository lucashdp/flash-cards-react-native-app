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

import { actionSaveDeck } from '../deck/action';

class NewDeck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newDeck: {
                id: this.props.lastId + 1,
                title: '',
                questions: [],
                progress: 0.00,
                points: 0
            },
            valid: 'none'
        }
    }

    saveDeck = () => {
        if (this.state.newDeck.title === '')
            this.setState({ valid: false })
        else {
            const deck = this.state.newDeck;

            this.props.dispatch(actionSaveDeck(deck));
            this.props.navigation.navigate('Deck', { deck });
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.navigate('Home') }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>New Deck</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel error={!this.state.valid && this.state.question === ''}>
                            <Label>What is the name of the deck ?</Label>
                            <Input onChangeText={(title) => {

                                let newDeck = this.state.newDeck;
                                newDeck.title = title;

                                this.setState({ newDeck })
                            }}
                                value={this.state.newDeck.title} />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full onPress={() => this.saveDeck()}>
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
        lastId: state.lastId
    }
}

export default connect(mapStateToProps)(NewDeck);