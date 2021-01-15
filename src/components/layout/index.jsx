/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Header } from '..'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className='h-screen flex flex-col overflow-auto'>
            <Header
                className='w-full max-w-6xl mx-auto flex items-center px-8 py-12 grid grid-cols-5'
                siteTitle={data.site.siteMetadata?.title || `Title`}
            />
            <main className='h-full w-full max-w-6xl flex-1 py-12 px-8 mx-auto'>
                {children}
            </main>

            <footer className=''>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href='https://www.gatsbyjs.com'>Gatsby</a>
            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
