import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { MainNavigation } from '..'

const Header = ({ className, siteTitle, style }) => (
    <header className={className} style={style}>
        <h1 style={{ margin: 0 }}>
            <Link to='/'>{siteTitle}</Link>
        </h1>
        <MainNavigation />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
