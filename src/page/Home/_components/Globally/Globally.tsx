import React, { FC } from 'react'
import Globally_1 from "../../../../assets/images/globally_1.png";
import Globally_2 from "../../../../assets/images/globally-2.png";
import Globally_3 from "../../../../assets/images/globally-3.png";
import Globally_4 from "../../../../assets/images/globally-4.png";
import Globally_5 from "../../../../assets/images/globally-5.png";
import { TextArrowBtn } from '../../../../components';
import { icons } from '../../../../libs/icons';

const { ArrowLeftSvg } = icons

interface Props {
    isVisible: boolean
}

const globallies = [
    {
        title: 'Data consumer',
        imageUrl: Globally_1,
        description: 'Query an existing subgraph in your project',
    },
    {
        title: 'Developer',
        imageUrl: Globally_2,
        description: 'Create a subgraph to use in your dapp',
    },
    {
        title: 'Indexer',
        imageUrl: Globally_3,
        description: 'Index data & serve queries for subgraphs',
    },
    {
        title: 'Delegator',
        imageUrl: Globally_4,
        description: 'Secure the network by supporting helpful Indexers',
    },
    {
        title: 'Curator',
        imageUrl: Globally_5,
        description: 'Identify useful subgraphs to index',
    },
]

const Globally: FC<Props> = ({ isVisible }) => {
    return (
        <div className={`main-2-container globally ${!isVisible ? 'un-visible' : 'visible'}`}>
            {/* Title */}
            <div className='globally-title'>
                <h2 className='text-center color-white'>
                    <span className='color-white'>Join the ecosystem</span> <br />
                    <span className='color-white-48'>Transform the internet</span>
                </h2>
                <p className='text-center text-regular color-secondary'>The Graph ecosystem welcomes you — regardless of where you are in the world, what your level of technical expertise is, or your familiarity with blockchains. Learn <br />  about all the roles in which you can choose to participate! </p>
            </div>

            {/* List */}

            <ul className='globally-list'>
                {globallies.map((item, i) => (
                    <li key={i}>
                        <div className='globally-list-item'>
                            <div className='image'>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <p className='title'>{item.title}</p>
                            <p className='description text-md color-white-48 text-center'>{item.description}</p>
                        </div>
                    </li>
                ))}
                <li >
                    <div className='globally-list-item globally-list-item-read-more'>
                        <div className='image'>
                        </div>
                        <div className='image-read-more'>
                            <img src="https://thegraph.com/_next/static/media/role-read-more.35360b19.jpg" alt="" />
                        </div>
                        <p className='title'>Read more <ArrowLeftSvg className='arrow-run' /></p>
                        <p className='description text-md color-white-48 text-center'>23 Ways to Participate in The Graph Ecosystem</p>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Globally 
