import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import './scss/button.scss'

const Button = ({ children, className, href, onClick, to, title, style }) => {
    return (
        <>
            {href && (
                <a
                    href={href}
                    title={title}
                    className={className}
                    style={style}
                >
                    {children}
                </a>
            )}
            {onClick && (
                <div
                    onClick={onClick}
                    title={title}
                    className={className}
                    style={style}
                    role='none'
                >
                    {children}
                </div>
            )}
            {to && (
                <Link to={to} title={title} className={className} style={style}>
                    {children}
                </Link>
            )}
        </>
    )
}

export default Button
