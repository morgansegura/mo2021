import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MainNavigation } from '..'

const Header = ({ className, handleToggleDrawer, siteTitle, style }) => {
    return (
        <header
            className={`fixed z-10 bg-white bg-opacity-75 ${className}`}
            style={style}
        >
            <div className='py-4 w-full max-w-6xl mx-auto flex items-center px-8'>
                <h1 className='m-0 text-lg uppercase inline'>
                    <Link className='relative' to='/'>
                        <span className='absolute bottom-0 left-0 transform translate-y-1 h-3 bg-yellow-200 w-full' />
                        <span className='relative'>{siteTitle}</span>
                    </Link>
                </h1>
                <MainNavigation
                    handleToggleDrawer={handleToggleDrawer}
                    className='flex-1 flex justify-between text-sm'
                />
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
