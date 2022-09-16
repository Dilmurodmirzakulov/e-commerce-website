import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import {Cart} from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {

    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <div className='navbar-container'>
            <p className='logo'>
                <Link href='/' >BOY TOYS O'YINCHOQLARI</Link>
            </p>

            <div>
                <a href="tel:+998911660567" class="phone-number">91 166 05 67</a>
                <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>{totalQuantities}</span>
                </button>
            </div>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar