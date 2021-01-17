/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Drawer, Header } from '..'

import '../../assets/scss/global.scss'

const Layout = ({ children }) => {
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const handleToggleDrawer = () => {
        setToggleDrawer(!toggleDrawer)
    }
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
        <Fragment>
            <div
                className={`h-screen flex flex-col transition ease-out duration-300 ${
                    toggleDrawer ? 'opacity-5 overflow-hidden' : ''
                }`}
            >
                <Header
                    handleToggleDrawer={handleToggleDrawer}
                    className='w-full border-b border-gray-200'
                    siteTitle={data.site.siteMetadata?.title || `Title`}
                />
                <main className='mt-16 relative w-full max-w-6xl flex-1 p-8 mx-auto'>
                    {children}
                </main>

                <footer className='p-8'>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href='https://www.gatsbyjs.com'>Gatsby</a>
                </footer>
            </div>
            <Drawer
                setToggleDrawer={setToggleDrawer}
                toggleDrawer={toggleDrawer}
            >
                Hello
            </Drawer>
        </Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
