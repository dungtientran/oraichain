import React from 'react'
import { icons } from '../../libs/icons'
import Dropdown from '../Dropdown/Dropdown';

const { EarthSvg, ArrowSvg } = icons;

export const Language = () => {

    const menu = [
        {
            label: (
                <p className="languge-item color-secondary">
                    English
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    English
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    English
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    English
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    English
                </p>
            ),
        },

    ]


    return (
        // <Dropdown menu={menu} className='nav-language-dropdown'>
        <div className='nav-language'>
            <EarthSvg style={{ marginBottom: '2px' }} />
            <p className="color-primary">English</p>
            <ArrowSvg />

        </div>
        // </Dropdown>
    )
}

