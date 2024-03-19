import React from 'react'
import { icons } from '../../libs/icons'
import Dropdown from '../Dropdown/Dropdown';

const { EarthSvg, ArrowSvg, Dot2Svg } = icons;

export const Language = () => {

    const menu = [
        {
            label: (
                <p className="languge-item color-secondary active">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>
                    EN - English
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    ES - Español
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    HI - हिन्दी
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    JA - 日本語
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    MR - मराठी
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    PT - Português
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    RU - Русский
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    SV - Svenska
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    TR - Türkçe
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    UR - اردو
                </p>
            ),
        },
        {
            label: (
                <p className="languge-item color-secondary">
                    <span ><Dot2Svg style={{ width: '14px', height: '14px' }} /></span>

                    ZH - 中文
                </p>
            ),
        },

    ]


    return (
        <div className='nav-language-container'>
            <Dropdown menu={menu} className='nav-language-dropdown'>
                <div className='nav-language'>
                    <EarthSvg style={{ marginBottom: '2px' }} />
                    <p className="color-primary">English</p>

                </div>
            </Dropdown>
        </div>
    )
}

