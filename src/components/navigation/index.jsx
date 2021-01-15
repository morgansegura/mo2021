import React from 'react'
import { NavLink } from '..'

const MainNavigation = ({ className, style }) => {
    return (
        <nav className={className} style={style}>
            <NavLink to='/' title='Home' text='Home' />
            <NavLink to='page-2' title='Home' text='Home' />
            <NavLink to='404' title='Home' text='Home' />
        </nav>
    )
}

export default MainNavigation
