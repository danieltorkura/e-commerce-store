import React from 'react'
import {Link} from 'react-router-dom'

export default function CartTotals({value}) {
    const {cartTotal, cartSubTotal, cartTax, clearCart} = value
    return (
       <React.Fragment>
           <div className='container'>
               <div className='row'>
                   <div className='col-10 mt-2 ml-sm-4 ml-md-auto col-sm-8 text-right text-capitalize'>
                       <Link to='/'><button className='btn btn-outline-danger text-uppercase mb-3 px-5'
                        type='button' onClick={() => clearCart()}>
                        {/* What is an impilicit return ******************* */}
                          clear cart </button></Link>
                          <h5>
                              <span className='text-title'> subtotal :</span>
                              <strong> $ {cartSubTotal }</strong>
                          </h5>
                          <h5>
                              <span className='text-title'> Tax :</span>
                              <strong> $ {cartTax }</strong>
                          </h5>
                          <h5>
                              <span className='text-title'> Total :</span>
                              <strong> $ {cartTotal }</strong>
                          </h5>
                   </div>
               </div>
           </div>
       </React.Fragment>
    )
}
