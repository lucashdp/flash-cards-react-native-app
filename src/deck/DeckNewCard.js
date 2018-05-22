import React, { Component } from 'react';
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

export default class DeckNewCard extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>New Card</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>What is the question ?</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>What is the answer ?</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Salvar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}