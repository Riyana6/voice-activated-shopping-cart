import './Navbar.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import AlanBtn from '../../screens/AlanBtn'

const Navbar = ({click}) => {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    return (
        <nav className ="navbar">
            <div className="navbar__logo">
                <h2>Shopping Cart</h2>
                <AlanBtn/>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart__link">
                        shop
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;