import React, { Component } from 'react'
import Card from './Card'
import { graphql } from 'react-apollo'
import {CARD_LIST_QUERY} from '../GraphqlQueries'

const CardList =()=> {

 

    const cardsToRender = [{"id":"1", "card_number":"4444-1000-2000-1000","first_name":"Jose","last_name":"Rizal","membership_tier":"gold"},{"id":"2","card_number":">","first_name":"Juan","last_name":"Luna","membership_tier":"silver"},{ "id":"3","card_number":"4444-1000-2000-3000","first_name":"Marcelo","last_name":"Del Pilar","membership_tier":"bronze"}]

    // 1
// if (this.props.cardsQuery && this.props.cardsQuery.loading) {
//   return <div>Loading</div>
// }

// // 2
// if (this.props.cardsQuery && this.props.cardsQuery.error) {
//   return <div>Error</div>
// }

// // 3
// const cardsToRender = this.props.cardsQuery.allCards
  
    return (
      <div>{cardsToRender.map(card => <Card key={card.id} card={card} />)}</div>
    )
  


  // return (
  //   <div>{cardsToRender.map(card => <Card key={card.id} card={card} />)}</div>
  // )
  
}

//export default CardList
export default graphql(CARD_LIST_QUERY, { name: 'cardsQuery' }) (CardList)