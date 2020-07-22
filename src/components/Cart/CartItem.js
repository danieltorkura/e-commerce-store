import React from 'react'

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item
    // count per item(looks like quantity)
    const {increment, decrement, removeItem} = value
    return (
        <div className='row text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} alt='product' className='img-fluid' style={{width: '5rem', height: '5rem'}}/>
            </div>
            <div className='col-10 mx-auto col-lg-2 py-4' >
                <span className='d-lg-none'>product : </span>
                {title}
             </div>
            <div className='col-10 mx-auto col-lg-2 py-4'>
                <span className='d-lg-none'>price : </span>
                $ {price}
             </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0 py-3'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <span className='btn btn-black mx-1' onClick={() => decrement(id)}>-</span>
                        <span className='btn btn-black mx-1'>{count}</span>
                        <span className='btn btn-black mx-1' onClick={() => increment(id)}>+</span>
                    </div>
                </div>
             </div>
            <div className='col-10 mx-auto col-lg-2 py-4'>
                <div className='cart-icon'> <i className='fas fa-trash' onClick={() => removeItem(id)}/></div>
            </div>    
            <div className='col-10 mx-auto col-lg-2 py-4'>
                <strong className='d-lg-none'>item total :</strong>  
                $ {total}
             </div>
           
        </div>
    )
}
