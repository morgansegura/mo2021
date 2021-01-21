import React from 'react'

import { FlipCard, Layout, SEO } from '../components'

import {
    RiPencilRulerLine,
    RiLightbulbLine,
    RiCodeBoxLine,
    RiRocket2Line,
    RiLayout5Line,
    RiArrowRightCircleLine,
} from 'react-icons/ri'
import { MdDevicesOther } from 'react-icons/md'

import TeamMeeting from '../assets/images/svg/team-meeting.svg'

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
            <FlipCard
                frontCard={
                    <div className='flex'>
                        <div className='flex items-center justify-center bg-green-100 rounded-full h-20 w-20'>
                            <RiLightbulbLine className='fill-current text-green-400 w-24 h-24' />
                        </div>
                        <div className='pl-4 pt-2'>
                            <div className='relative'>
                                <div className='flex items-center w-auto py-1'>
                                    <h3 className={`mb-0`}>Idea</h3>
                                    <RiArrowRightCircleLine className='ml-2 mt-1' />
                                </div>
                            </div>
                            <p>A simple sketch goes a long way.</p>
                        </div>
                    </div>
                }
                backCard={
                    <div className='flex'>
                        <p>A simple sketch goes a long way.</p>
                    </div>
                }
            />
            {/*
            <div className='bg-white flex items-center rounded-xl shadow border border-gray-100 p-4'>
                <div className='flex items-center justify-center h-20 w-20 bg-green-100 rounded-full'>
                    <RiLightbulbLine className='fill-current text-green-400 w-24 h-24' />
                </div>
                <div className='pl-4 pt-2'>
                    <div className='relative cursor-pointer flex items-center w-auto py-1'>
                        <h3 className='mb-0'>Idea</h3>
                        <RiArrowRightCircleLine className='ml-2 mt-1' />
                        <div className='absolute transform translate-x-1/3 translate-y-0 bottom-0 left-0 origin-top-left shadow-lg p-4 bg-yellow-100 rounded-tl-md rounded-tr-md rounded-br-md'>
                            <div>
                                <h4 className='mb-2'>A title for this</h4>
                                <p className='text-sm'>
                                    A bunch of stuff for a description
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>A simple sketch goes a long way.</p>
                </div>
            </div>

            <div className='bg-white flex items-center rounded-xl shadow border border-gray-100 p-4'>
                <div className='flex items-center justify-center h-20 w-20 bg-green-100 rounded-full'>
                    <RiPencilRulerLine className='fill-current text-green-400 w-24 h-24' />
                </div>
                <div className='pl-4 pt-2'>
                    <div className='relative cursor-pointer flex items-center py-1'>
                        <h3 className='mb-0'>Sketch</h3>
                        <RiArrowRightCircleLine className='ml-2 mt-1' />
                        <div className='absolute transform translate-x-1/3 -translate-y-1/4 bottom-0 left-0 origin-top-left shadow-lg p-4 bg-yellow-100 rounded-tl-md rounded-tr-md rounded-br-md'>
                            <div>
                                <h4 className='mb-2'>A title for this</h4>
                                <p className='text-sm'>
                                    A bunch of stuff for a description
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>A simple sketch goes a long way.</p>
                </div>
            </div>
            <div className='bg-white flex items-center rounded-xl shadow border border-gray-100 p-4'>
                <div className='flex items-center justify-center h-20 w-20 bg-green-100 rounded-full'>
                    <RiLayout5Line className='fill-current text-green-400 w-24 h-24' />
                </div>
                <div className='pl-4 pt-2'>
                    <div className='cursor-pointer flex items-center py-1'>
                        <h3 className='mb-0'>Design</h3>
                        <RiArrowRightCircleLine className='ml-2 mt-1' />
                    </div>
                    <p>A simple sketch goes a long way.</p>
                </div>

            </div>
            <div className='bg-white flex items-center rounded-xl shadow border border-gray-100 p-4'>
                <div className='flex items-center justify-center h-20 w-20 bg-green-100 rounded-full'>
                    <RiCodeBoxLine className='fill-current text-green-400 w-24 h-24' />
                </div>
                <div className='pl-4 pt-2'>
                    <div className='cursor-pointer flex items-center py-1'>
                        <h3 className='mb-0'>Code</h3>
                        <RiArrowRightCircleLine className='ml-2 mt-1' />
                    </div>
                    <p>A simple sketch goes a long way.</p>
                </div>
            </div>
            <div className='bg-white flex items-center rounded-xl shadow border border-gray-100 p-4'>
                <div className='flex items-center justify-center h-20 w-20 bg-green-100 rounded-full'>
                    <MdDevicesOther className='fill-current text-green-400 w-24 h-24' />
                </div>
                <div className='pl-4 pt-2'>
                    <div className='cursor-pointer flex items-center py-1'>
                        <h3 className='mb-0'>Test</h3>
                        <RiArrowRightCircleLine className='ml-2 mt-1' />
                    </div>
                    <p>A simple sketch goes a long way.</p>
                </div>
            </div>
            <div className='bg-white flex items-center rounded-xl shadow border border-gray-100 p-4'>
                <div className='flex items-center justify-center h-20 w-20 bg-green-100 rounded-full'>
                    <RiRocket2Line className='fill-current text-green-400 w-24 h-24' />
                </div>
                <div className='pl-4 pt-2'>
                    <div className='cursor-pointer flex items-center py-1'>
                        <h3 className='mb-0'>Deploy</h3>
                        <RiArrowRightCircleLine className='ml-2 mt-1' />
                    </div>
                    <p>A simple sketch goes a long way.</p>
                </div>
            </div>
              */}
        </div>
    </Layout>
)

export default IndexPage
