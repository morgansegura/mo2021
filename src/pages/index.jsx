import React from 'react'

import { FlipCard, Layout, SEO } from '../components'

import TeamMeeting from '../assets/images/svg/team-meeting.svg'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { flipCardContent } from '../data'

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        {/* Hero */}
        <div className='flex flex-col mb-8 lg:grid grid-cols-2'>
            <div className='flex flex-col justify-center bg-white pb-0 p-8'>
                <h2 className='text-4xl font-bold max-w-sm'>
                    <span className='text-6xl block lg:py-4'>Hi, I'm Mo.</span>
                    Let's build projects that make a difference.
                </h2>
                <p className='text-lg max-w-sm'>
                    A Ui/UX Developer using my craft to help make the world a
                    better place.
                </p>
            </div>
            <div className='relative flex flex-col'>
                <TeamMeeting />
            </div>
        </div>
        {/* Process */}
        <div>
            <h2 className='text-6xl bg-blue-100 p-8 rounded-md lg:p-20 lg:mb-12'>
                Name the project and we'v got the process
            </h2>
        </div>
        <div className='flex mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {flipCardContent.map(item => (
                <FlipCard
                    key={item.id}
                    frontCard={
                        <div className='flex'>
                            <div className='flex items-center justify-center bg-green-100 rounded-full h-20 w-20'>
                                {item.icon}
                            </div>
                            <div className='pl-4 pt-2'>
                                <div className='relative'>
                                    <div className='flex items-center w-auto py-1'>
                                        <h3 className='mb-0'>
                                            {item.frontCardTitle}
                                        </h3>
                                        <RiArrowRightCircleLine className='ml-2 mt-1' />
                                    </div>
                                </div>
                                <p>{item.frontCardText}</p>
                            </div>
                        </div>
                    }
                    backCard={
                        <div className='flex'>
                            <h3 className='mb-0'>{item.backCardTitle}</h3>
                            <p>{item.backCardText}</p>
                        </div>
                    }
                />
            ))}
        </div>
    </Layout>
)

export default IndexPage
