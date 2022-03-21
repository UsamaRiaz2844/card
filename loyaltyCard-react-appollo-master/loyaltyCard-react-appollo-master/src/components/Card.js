import React, { Component } from 'react'
import './card.css'

class Card extends Component {
  render() {
    return (
      <div>
        {/* <div>
        <span> Name :</span>  {this.props.card.first_name} {this.props.card.last_name} <span>          Card Number</span> {this.props.card.card_number}  
        <span>MemberShip_tier</span>{this.props.card.membership_tier}
         
      
        </div> */}


<div class="container">
  <div class="card__container">
    <div class="card">
      <div class="card__content">
        <h3 class="card__header">{this.props.card.first_name} {this.props.card.last_name} </h3>
        <span>   Card Number</span> {this.props.card.card_number} <br />
        <span>MemberShip_tier</span>{this.props.card.membership_tier} <br />
        <button class="card__button">Read now</button>
      </div>
    </div>
  </div>
</div>
    
</div>
     
      )
    }

  }

export default Card