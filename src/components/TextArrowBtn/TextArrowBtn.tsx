import React, { CSSProperties, FC } from 'react'
import { icons } from '../../libs/icons'

const { ArrowLeftSvg } = icons

interface Props {
    label: string;
    className?: string;
    styleArrow?: CSSProperties;
}

const TextArrowBtn: FC<Props> = ({ label, className, styleArrow }) => {
    return (
        <button
            className={`btn-text-arrow color-primary ${className}`}
        >
            {label}
            <ArrowLeftSvg className={`arrow `} style={styleArrow} />
        </button>

    )
}

export default TextArrowBtn
