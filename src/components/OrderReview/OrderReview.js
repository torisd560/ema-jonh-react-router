import React from 'react';
import { useHistory } from 'react-router';
import UseCart from '../../hooks/UseCart';
import UseProducts from '../../hooks/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    const [products] = UseProducts()
    const [cart, setCart] = UseCart(products)
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        removeFromDb(key)

    }
    const handlePlaceOrder =() =>{
        history.push('/placeOrder')
        setCart([])
        clearTheCart()
    }
    return (
        <div className='shop-container'>
            <div >
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;