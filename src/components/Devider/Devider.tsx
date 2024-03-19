import React from 'react'
import { icons } from '../../libs/icons'

const { DotSvg } = icons;

const Devider = () => {
    return (
        <div className='main-2-container devider'>
            <DotSvg style={{ width: '8px' }} />
            <p />
            <DotSvg style={{ width: '8px' }} />
        </div>
    )
}

export default Devider
