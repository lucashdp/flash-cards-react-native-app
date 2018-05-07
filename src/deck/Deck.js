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
  Icon
} from 'native-base';
import { actionGetDecks, actionLoading } from './action'

class Deck extends Component {
  render() {
    console.log('[DECK] RENDER');
    console.log('props: ' + JSON.stringify(this.props));

    return (
      <Header>
        <Left>
          <Button transparent onPress={() => {this.props.navigation.goBack()}}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.deck.title}</Title>
        </Body>
        <Right>
        </Right>
      </Header>
    )
  }
}

function mapStateToProps(state, { navigation }) {

  return {
    deck: navigation.state.params.deck
  }
}

export default connect(mapStateToProps)(Deck);