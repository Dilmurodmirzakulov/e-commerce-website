import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {Product} from '../../components'
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {

    let { image, name, details, price } = product
    const [index, setIndex] = useState(0)
    const  {incQty, decQty, qty, onAdd} = useStateContext()

    
    React.useEffect(() => {
    let imageContainer = document.querySelector('.image-container');
    let productDetailImage = document.querySelector('.product-detail-image');
    imageContainer.addEventListener('mouseover', ()=>{
        imageContainer.style.backgroundColor = 'red'
        productDetailImage.style.backgroundColor = 'red'
        productDetailImage.style.transition = '0s'
    })
    imageContainer.addEventListener('mouseout', ()=>{
        imageContainer.style.backgroundColor = '#EBEBEB'
        productDetailImage.style.backgroundColor = '#EBEBEB'
    })
        return () => {
        }
    }, [])

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container' style={{height: '400px', width: '400px', borderRadius: '15px', display: 'flex', alignItems: 'center', background: '#EBEBEB'}}>
                        <img src={urlFor(image && image[index])}className ='product-detail-image'  />
                    </div>

                    <div className='small-images-container' >
                        {image?.map((item, i) => (
                            <img
                                src={urlFor(item)}
                                className ={i === index ? 'small-image selected-image' : 'small-image'}
                                onClick={() => setIndex(i) }
                            />
                        ))}
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Ma'lumotlar: </h4>
                    <p>{details}</p>
                    <p className='price'>{price} so'm</p>
                    <div className='quantity'>
                        <h3>Qop: </h3>
                        <p className="quantity-desc">
                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num'>{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)} >Hisobga qo'shish</button>
                        <a href='tel:+998911660567'>
                            <button type='button' className='buy-now' >Buyurtma uchun</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                    <h2>O'xshash maxsulotlar</h2>
                    <div className='marquee'>
                        <div className='maylike-products-container track'>
                            {products.map(item => (
                                <Product key={item._id} product = {item} />
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}

// export const getStaticPaths = async () => {
//     const query = `*[_type == "product"] {
//         slug{
//             current
//         }
//     }`

//     const products = await client.fetch(query);

//     const paths = products.map(product => ({
//         params: {
//             slug: product.slug.current
//         }
//     }))

//     return{
//         paths,
//         fallback: 'blocking'
//     }
// }

// export const getStaticProps = async ({ params: { slug } })=> {
//     const query = `*[_type == "product" && sulg.current == '${slug}'][0]`;
//     const productsQuery = '*[_type == "product"]'

//     const product = await client.fetch(query);
//     const products = await client.fetch(productsQuery);
    
//     return{
//         props: { products, product }
//     }
// }

// export default ProductDetails


export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
        current
    }
}
`;

const products = await client.fetch(query);

const paths = products.map((product) => ({
    params: {
        slug: product.slug.current
    }
}));

return {
    paths,
    fallback: 'blocking'
}
}

export const getStaticProps = async ({ params: { slug } }) => {
const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
const productsQuery = '*[_type == "product"]'

const product = await client.fetch(query);
const products = await client.fetch(productsQuery);

console.log(product);

return {
    props: { products, product }
}
}

export default ProductDetails