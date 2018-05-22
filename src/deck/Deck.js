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
  CardItem
} from 'native-base';

import { actionGetDecks, actionLoading, actionStartQuiz } from './action'

class Deck extends Component {

  startQuiz = (deck) => {
    console.log('entrou no start quiz')
    console.log('deck: ' + JSON.stringify(deck))
    this.props.dispatch(actionStartQuiz(this.props.deck));
    this.props.navigation.navigate('DeckQuiz', { deck })
  }
  
  newCard = (deck) => {
    console.log('entrou no new Card')
    console.log('deck: ' + JSON.stringify(deck))
    this.props.navigation.navigate('DeckNewCard', { deck })
  }

  render() {
    console.log('[DECK] RENDER');
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
            <Title>{this.props.deck.title}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.deck.title}</Text>
                  <Text note>{this.props.deck.questions.length} cards</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'https://cdn.notonthehighstreet.com/system/product_images/images/001/330/301/original_love-beards-greetings-card.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button primary onPress={() => { this.newCard(this.props.deck) }}>
                  <Icon name="add" />
                  <Text>Add Card</Text>
                </Button>
              </Left>
              <Right>
                <Button dark onPress={() => { this.startQuiz(this.props.deck) }}>
                  <Icon name="play" />
                  <Text>Start Quiz</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state, { navigation }) {

  return {
    deck: navigation.state.params.deck
  }
}

export default connect(mapStateToProps)(Deck);