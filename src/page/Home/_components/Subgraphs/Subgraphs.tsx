import React, { FC, useEffect, useRef, useState } from 'react'
import Blockchain from "../../../../assets/images/subgraphs_blockchain.png";
import Contracts from "../../../../assets/images/subgraphs-contracts.png";
import Sup from "../../../../assets/images/subgraphs-subgraphs.png";
import Uis from "../../../../assets/images/subgraphs-uis.png";
import { TextArrowBtn } from '../../../../components';


interface Props {
    isVisible: boolean
}


const subgraphs = {
    list: [
        {
            title: 'UIs',
            image: Uis
        },
        {
            title: 'Subgraphs',
            image: Sup
        },
        {
            title: 'Smart contracts',
            image: Contracts
        },
        {
            title: 'Blockchain',
            image: Blockchain
        },
    ]
}


const Subgraphs: FC<Props> = ({ isVisible }) => {

    return (
        <div className='main-2-container subgraphs'>
            <div className='subgraphs-images'>
                {subgraphs.list.map((item, i) => (
                    <div
                        style={{ backgroundImage: `url(${item.image})` }}
                        className={`subgraphs-images-item-${i + 1} ${!isVisible ? `item${i + 1}` : `item-tranform-${i + 1}`}`}
                    >
                        <p className='text-regular color-white'>{item.title}</p>
                    </div>
                ))}
            </div>

            <div className={`subgraphs-right ${!isVisible ? 'subgraphs-right-hidden' : 'subgraphs-right-visiale'}`}>
                <h2>
                    <p className='color-white'>
                        Subgraphs
                    </p>
                    <p className='color-secondary'>
                        Industry-standard data access
                    </p>
                </h2>

                <p className='text-regular color-secondary subgraphs-right-description'>
                    Subgraphs are open APIs on The Graph that organize and serve blockchain data to applications. Using subgraphs, developers and data consumers alike benefit from speedy access to indexed data.
                </p>


                <div className='subgraphs-right-btns'>
                    <button className='btn-build color-primary'>Build a Subgraph</button>
                    <TextArrowBtn label='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default Subgraphs
