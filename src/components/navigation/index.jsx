import React from 'react'
import { NavLink } from '..'

const MainNavigation = ({ className, style }) => {
    return (
        <nav className={className} style={style}>
            <NavLink className='py-1 px-4' to='/' title='Home' text='Home' />
            <NavLink
                className='py-1 px-4'
                to='/page-2'
                title='Page 2'
                text='Page 2'
            />
            <NavLink className='py-1 px-4' to='/404' title='404' text='404' />
            <NavLink
                className='border border-black py-1 px-4'
                to='/contact'
                title='Contact'
                text='Contact'
            />
        </nav>
    )
}

export default MainNavigation
