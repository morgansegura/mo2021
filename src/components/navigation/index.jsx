import React from 'react'
import { Button, NavLink } from '..'

const MainNavigation = ({ className, handleToggleDrawer, style }) => {
    return (
        <nav className={className} style={style}>
            <div className='flex-1 flex itmes-center justify-end px-4'>
                <NavLink
                    className='text-sm font-semibold py-1 px-2 border-b-4 border-transparent hover:border-yellow-200 transition-all ease-out duration-300'
                    to='/blog'
                    title='Blog'
                    text='Blog'
                />
                <NavLink
                    className='text-sm font-semibold py-1 px-2 border-b-4 border-transparent hover:border-yellow-200 transition-all ease-out duration-300'
                    to='/page-2'
                    title='Works'
                    text='Works'
                />
                <NavLink
                    className='text-sm font-semibold py-1 px-2 border-b-4 border-transparent hover:border-yellow-200 transition-all ease-out duration-300'
                    to='/404'
                    title='404'
                    text='404'
                />
            </div>
            <Button
                onClick={handleToggleDrawer}
                className='cursor-pointer flex justify-center items-center text-xs bg-black text-white px-2 uppercase font-semibold rounded-sm hover:bg-yellow-300 hover:text-black transition-all ease-out duration-300'
            >
                Connect
            </Button>
        </nav>
    )
}

export default MainNavigation
