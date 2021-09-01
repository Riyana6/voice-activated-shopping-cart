import './CartScreen.css'
import CartItem from '../../components/CartItem/CartItem';
import { React } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import PayPalButton from '../../components/PayPalButton/PayPalButton'
//actions
import {addToCart, removeFromCart} from '../../redux/actions/cartActions';

export default function CartScreen({history}) {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler =(id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price,0);
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to= "/">Go Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem 
                        key={item.product}
                        item={item}
                        qtyChangeHandler={qtyChangeHandler} 
                        removeFromCartHandler={removeFromCartHandler}
                    />
                ))}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    Proceed to Checkout
                    <PayPalButton
                        total={getCartSubTotal().toFixed(2)}
                        history={history}
                    />
                </div>
            </div>
        </div>
    )
}
