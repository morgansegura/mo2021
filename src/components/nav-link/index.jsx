import React from 'react'
import { Link } from 'gatsby'

const NavLink = ({ className, style, text, title, to }) => {
    return (
        <Link className={className} data-title={title} to={to} style={style}>
            {text}
        </Link>
    )
}

export default NavLink
