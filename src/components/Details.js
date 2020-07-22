import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, price, inCart, company, img, info } = value.detailProduct
                    return (
                        <div className='container py-5'>
                            {/* Title begin */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* Title end */}
                            {/* Product info */}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <img src={img} alt='product' className='img-fluid' />
                                </div>

                                {/* Product text */}
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <h2>Model : {title}</h2>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                        made by : <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>
                                            price : <span>$</span> {price}
                                        </strong>
                                    </h4>

                                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                        some info about the product:
                                    </p>

                                    <p className='text-muted lead'>{info}</p> 

                                    {/* Button */}
                                    <div >
                                        <Link to='/'>
                                            <ButtonContainer>
                                                back to products 
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id); value.openModal(id)
                                        }}
                                        >
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
