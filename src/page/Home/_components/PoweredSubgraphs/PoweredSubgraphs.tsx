import React, { FC, useRef, useState } from 'react'
import { TextArrowBtn } from '../../../../components';
import { icons } from '../../../../libs/icons';

const { ArrowLeftSvg, NetWork1Svg } = icons;

interface Props {
    isVisible: boolean
}

const imageUrl = 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmbg6s6UhpEdqAJhvDBEFxagCR9TT3nzcep5mBo53XqbLt'

const images = [
    {
        title: 'Defi',
        images: [
            imageUrl, imageUrl, imageUrl, imageUrl
        ]
    },
    {
        title: 'NFTs',
        images: [
            imageUrl, imageUrl, imageUrl, imageUrl
        ]
    },
    {
        title: 'DAOs',
        images: [
            imageUrl, imageUrl, imageUrl, imageUrl
        ]
    },
    {
        title: 'Analytics',
        images: [
            imageUrl, imageUrl, imageUrl, imageUrl
        ]
    },
    {
        title: 'Gaming',
        images: [
            imageUrl, imageUrl, imageUrl, imageUrl
        ]
    },
]


const networks = [
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
    {
        title: 'Ethereum',
        icon: <NetWork1Svg />
    },
]

const PoweredSubgraphs: FC<Props> = ({ isVisible }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleHover = () => {
        setIsHovered(true)
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleHoverOut = () => {
        setIsHovered(false)
        if (videoRef.current) {
            videoRef.current.pause();

        }
    };

    console.log("isHovered", isHovered)

    return (
        <div className={`main-container powered-subgraphs ${isVisible && 'powered-subgraphs-visible'}`}>
            {/* Web3 */}
            <div className='powered-subgraphs-web3'>

                {/* description */}
                <div className='description'>
                    <h2>
                        <p className='color-primary'>Web3</p>
                        <p className='color-white-48'>Powered by subgraphs</p>
                    </h2>

                    <p className='text-regular color-secondary description-text'>
                        Tens of thousands of developers rely on The Graph to create best-in-class user experiences. Explore a rich ecosystem of community-created subgraphs or build your own with <br /> The Graph.
                    </p>

                    <div className='description-info'>

                        <div className='box'>
                            <p className='text-regular color-primary text-nowrap'>200+ <p>Indexer Nodes</p></p>
                            <p className='text-small-12 color-white-48'>On The Graph Network</p>
                        </div>

                        <div className='devider' />

                        <div className='box'>
                            <p className='text-regular color-primary text-nowrap'>1.2 Trillion+ <p>Queries Served</p></p>
                            <p className='text-small-12 color-white-48'>On The Graph Network <br /> & hosted service</p>
                        </div>
                        <div className='devider' />

                        <div className='box'>
                            <p className='text-regular color-primary text-nowrap'>60K+ <p>Projects</p></p>
                            <p className='text-small-12 color-white-48'>On The Graph Network <br /> & hosted service</p>
                        </div>

                    </div>
                </div>

                {/* Image group */}
                <div className='images'>
                    {images.map((item, i) => (
                        <div key={i} className='images-item'>
                            <div className='images-box'>
                                {item.images.map((item, i) => (
                                    <img key={i} src={item} alt="anh" />
                                ))}
                                <div className='ovelay'>

                                </div>
                            </div>

                            <p className='text-center images-text'>
                                {item.title}
                                <ArrowLeftSvg className='arrow-run' />

                            </p>
                        </div>
                    ))}
                    <div className='images-item' onMouseEnter={handleHover}
                        onMouseLeave={handleHoverOut}
                    >
                        <div className='images-box-viewAll'>
                            <video ref={videoRef} muted>
                                <source src='https://thegraph.com/_next/static/media/all-subgraphs.54f7890e.mp4' />
                            </video>

                            <div className='ovelay'>

                            </div>
                        </div>

                        <p className='text-center images-text'>
                            View all
                            <ArrowLeftSvg className='arrow-run' />

                        </p>
                    </div>
                </div>
            </div>


            {/* Supported Networks */}
            <div className='powered-subgraphs-network'>
                <h3 className=' color-white'>Supported Networks</h3>
                <p className='text-regular color-secondary '>Anyone can use subgraphs to power applications across 40+ networks and counting.</p>
                <ul>

                    {networks.map((item, i) => (
                        <li key={i}>
                            <span>
                                {item.icon}
                            </span>

                            <div className='hint color-primary'>
                                {item.title}
                            </div>
                        </li>

                    ))}
                </ul>
            </div>

            {/* View all networks⁠ */}

            <div className='powered-subgraphs-view_all'>
                <TextArrowBtn className='text-md' styleArrow={{ width: '18px', height: '18px' }} label='View all networks' />
                <p className='text-small-12 color-white-48 text-small-12 '>On The Graph Network & hosted service</p>
            </div>
        </div>
    )
}

export default PoweredSubgraphs
