import React from 'react';

const ReviewItem = (props) => {
    const {name, seller, price, stock, key} =props.product
    const {handleRemove} = props
    
    return (
        <div className='product-info'>
                    <h3>{name}</h3>
                    <p><small>by:</small>{seller}</p>
                    <p>${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button onClick={ ()=> handleRemove(key)} className='btn-regular'>Remove</button>
                </div>
    );
};

export default ReviewItem;