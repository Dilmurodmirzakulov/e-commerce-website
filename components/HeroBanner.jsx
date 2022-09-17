import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.discount}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1>
                <h1>{heroBanner.largeText2}</h1>
                <img src={urlFor(heroBanner.image)} alt='baby with toys' className='hero-banner-image' />

                {/* <Link href={`/product/${heroBanner.product}`}>
                </Link> */}
                <button type='button' >
                    <a href="+998911660567" class="phone-number">{heroBanner.buttonText}</a>
                </button>

                <div className='desc'>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner