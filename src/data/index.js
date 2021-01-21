import React from 'react'

import {
    RiPencilRulerLine,
    RiLightbulbLine,
    RiCodeBoxLine,
    RiRocket2Line,
    RiLayout5Line,
} from 'react-icons/ri'
import { MdDevicesOther } from 'react-icons/md'

export const flipCardContent = [
    {
        id: 0,
        icon: (
            <RiLightbulbLine className='fill-current text-green-400 w-24 h-24' />
        ),
        frontCardTitle: 'Idea',
        frontCardText: 'A simple sketch goes a long way.',
        backCardTitle: '',
        backCardText:
            'This side of the card should go into more detail that describes the topic on the front of the card',
    },
    {
        id: 1,
        icon: (
            <RiPencilRulerLine className='fill-current text-green-400 w-24 h-24' />
        ),
        frontCardTitle: 'Sketch',
        frontCardText: 'A simple sketch goes a long way.',
        backCardTitle: '',
        backCardText:
            'This side of the card should go into more detail that describes the topic on the front of the card',
    },
    {
        id: 2,
        icon: (
            <RiLayout5Line className='fill-current text-green-400 w-24 h-24' />
        ),
        frontCardTitle: 'Design',
        frontCardText: 'A simple sketch goes a long way.',
        backCardTitle: '',
        backCardText:
            'This side of the card should go into more detail that describes the topic on the front of the card',
    },
    {
        id: 3,
        icon: (
            <RiCodeBoxLine className='fill-current text-green-400 w-24 h-24' />
        ),
        frontCardTitle: 'Code',
        frontCardText: 'A simple sketch goes a long way.',
        backCardTitle: '',
        backCardText:
            'This side of the card should go into more detail that describes the topic on the front of the card',
    },
    {
        id: 4,
        icon: (
            <MdDevicesOther className='fill-current text-green-400 w-24 h-24' />
        ),
        frontCardTitle: 'Test',
        frontCardText: 'A simple sketch goes a long way.',
        backCardTitle: '',
        backCardText:
            'This side of the card should go into more detail that describes the topic on the front of the card',
    },
    {
        id: 5,
        icon: (
            <RiRocket2Line className='fill-current text-green-400 w-24 h-24' />
        ),
        frontCardTitle: 'Deploy',
        frontCardText: 'A simple sketch goes a long way.',
        backCardTitle: '',
        backCardText:
            'This side of the card should go into more detail that describes the topic on the front of the card',
    },
]
