import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

const Promo = ({left, img, products}) => {
  return (
    <div className={left ? 'flex flex-row gap-5 items-center mt-10 mb-10 justify-center bg-primary-200 px-16 py-5 rounded-xl' : 'flex flex-row-reverse gap-5 items-center mt-10 mb-10 justify-center bg-primary-200 px-16 py-5 rounded-xl'}>
        <img src={img} alt='img promo' className='object-cover h-72 w-48 '/>
        {products.map(p=>{
            return (
                <Link key={p.id} to={`/${p.id}`}>
                <Product product={p}/>
                </Link>
            )
        })}
    </div>
  )
}

export default Promo