import React from 'react'
import { ProductConsumer } from './ProductProvider'

const OtherComponent = props => {
  return (
    <ProductConsumer>
      { state => (
          <div>{ JSON.stringify( state ) }</div>
        ) }
    </ProductConsumer>
  )
}

export default OtherComponent