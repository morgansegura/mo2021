import React from 'react'

import { Layout, SEO } from '../components'
import { VirtualReality } from '../components/svg'

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />

        <section className='bg-fill-block-yellow relative h-64 mb-20 grid grid-cols-5'>
            <div className='col-span-1'>
                <h1 className='text-4xl font-bold'>
                    Morbi non arcu risus quis gariuces
                </h1>
                <p className='w-2/3'></p>
            </div>
            <div className='place-image relative col-span-3 p-8'>
                <VirtualReality className='' color='green-100' />
            </div>
        </section>
        <section className='grid grid-cols-5'>
            <div className='col-span-2'>
                <h1 className='text-6xl font-bold'>
                    <span className='relative inline'>
                        <span className='relative pr-4'>Easy</span>
                    </span>
                    to customize
                </h1>
                <p className='text-2xl leading-relaxed'>
                    It's easy to customize these illustrations with ready vector
                    files. You can quickly change colors, control thickness and
                    modify shapes.
                </p>
            </div>
        </section>
    </Layout>
)

export default IndexPage
