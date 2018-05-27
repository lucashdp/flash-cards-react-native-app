import React, { Component } from 'react';
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
  Icon
} from 'native-base';
import { connect } from 'react-redux';
import { actionLoading } from './action';
import { getStateStorage } from '../../utils/api';
import { getDecks } from './reducer';
import Expo from "expo";

class DeckList extends Component {
  onPress = (key) => {
    console.log('entrou list item click')
    this.props.navigation.navigate('Deck', { deck: key })
  }

  render() {
    return (
      <Content>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Decks</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <List>
          {
            console.log('this.props.decks ' + JSON.stringify(this.props.decks))
          }
          {
            this.props.decks.map((key) => {
              console.log('key ' + JSON.stringify(key))
              return (
                <ListItem key={key.id} button={true}
                  onPress={() => { this.onPress(key) }}>
                  <Thumbnail square size={80} source={{ uri: 'https://cdn.notonthehighstreet.com/system/product_images/images/001/330/301/original_love-beards-greetings-card.jpg' }} />
                  <Body>
                    <Text>({key.id}) {key.title}</Text>
                    <Text note>{key.questions.length} cards</Text>
                  </Body>
                </ListItem>
              );
            }
            )}
        </List>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: getDecks(state)
  };
}

export default connect(mapStateToProps)(DeckList);
