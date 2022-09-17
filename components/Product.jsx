import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Products = ({ product: { image, name, slug, price } }) => {
    return (
        <div className='animated-product'>
            <Link href={`/product/${slug.current}`}>
                <div className='product-card'>
                    <div className='product-image-container' style={{height: '250px', width: '250px', borderRadius: '15px', display: 'flex', alignItems: 'center', background: '#EBEBEB'}}>
                        <img 
                            src={urlFor(image && image[0])}
                            width = {250}
                            className = 'product-image'
                        />
                    </div>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>{price} so'm</p>
                </div>
            </Link>
        </div>
    )
}

export default Products