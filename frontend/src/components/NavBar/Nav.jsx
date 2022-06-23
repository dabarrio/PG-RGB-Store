import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex flex-row justify-evenly bg-primary h-12 items-center font-semibold text-xl uppercase'>
        <Link to='/categories' className='hover:bg-primary-300 hover:py-3 px-4 '>
        <p>Categorías</p>
        </Link>
        <Link to='/categories/notebooks' className='hover:bg-primary-300 hover:py-3 px-4'>
        Notebooks
        </Link>
        <Link to='/categories/pc-armadas' className='hover:bg-primary-300 hover:py-3 px-4'>
        PC Armadas
        </Link>
        <Link to='/categories/placas-de-videos' className='hover:bg-primary-300 hover:py-3 px-4'>
        Placas de videos
        </Link>
        <Link to='/arma-tu-pc' className='hover:bg-primary-300 hover:py-3 px-4'>
        <p>Armá tu pc</p>
        </Link>
    </div>
  )
}

export default Nav