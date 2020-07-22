import React from 'react'

export default function CartColumns() {
    return (
        <div className='container-fluid text-center d-none d-lg-block my-3'>
            {/* don't show on large stuff */}
            <div className='row'>
                <div className='col-l0 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Products</p>
                </div>
                <div className='col-l0 mx-auto col-lg-2'>
                    <p className='text-uppercase'>name of product</p>
                </div>
                <div className='col-l0 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Price</p>
                </div>
                <div className='col-l0 mx-auto col-lg-2'>
                    <p className='text-uppercase'>quantity</p>
                </div>
                <div className='col-l0 mx-auto col-lg-2'>
                    <p className='text-uppercase'>remove</p>
                </div>
                <div className='col-l0 mx-auto col-lg-2'>
                    <p className='text-uppercase'>total</p>
                </div>
            </div>
        </div>
    )
}
