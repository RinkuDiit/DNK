import React from 'react'
import { addcart } from './Singleproduct'

function CardPage() {

    const card = addcart
    console.log(card)

  return (
    <div>
       <div className="spacess"></div>
       <div className="h2">cart</div>
    </div>
  )
}

export default CardPage