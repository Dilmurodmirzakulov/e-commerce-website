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
            <span style={{display: 'flex', flexWrap: 'wrap', marginLeft: '20px', marginTop: '10px'}}>
                <a href="tel:+998911660567" class="phone-number phone-number1" style={{ marginRight: '25px'}}>91 166 05 67</a>
                <a href="tel:+998988098275" class="phone-number">98 809 82 75</a>
            </span>
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