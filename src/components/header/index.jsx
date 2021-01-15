import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { MainNavigation } from '..'

const Header = ({ className, siteTitle, style }) => (
    <header className={className} style={style}>
        <h1 className='m-0 text-lg uppercase col-span-2 inline'>
            <Link className='relative' to='/'>
                <span className='absolute bottom-0 left-0 transform translate-x-1 translate-y-1 h-3 bg-yellow-200 w-full' />
                <span className='relative'>{siteTitle}</span>
            </Link>
        </h1>
        <MainNavigation className='flex-1 flex justify-between text-sm col-span-3' />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
