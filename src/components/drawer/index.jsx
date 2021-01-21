import React, { useState } from 'react'
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri'
import './scss/drawer.scss'

const Drawer = ({ children, setToggleDrawer, toggleDrawer }) => {
    const [showIcon, setShowIcon] = useState(false)

    return (
        <div
            className={`drawer shadow-lg transform transition-transform ease-out duration-300 ${
                toggleDrawer ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className='drawer__inner'>{children}</div>
            <div
                onClick={() => setToggleDrawer(false)}
                onMouseEnter={() => setShowIcon(true)}
                onMouseLeave={() => setShowIcon(false)}
                role='none'
                className='absolute right-0 top-0 m-4 t-4 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-black text-yellow-200 hover:bg-yellow-200 hover:text-black transition-all ease-out duration-300'
            >
                <RiEyeLine
                    className={`absolute ${
                        showIcon ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <RiEyeCloseLine
                    className={`absolute ${
                        showIcon ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>
        </div>
    )
}

export default Drawer
