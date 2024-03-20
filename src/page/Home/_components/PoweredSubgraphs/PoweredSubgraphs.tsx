import React, { FC, useRef, useState } from 'react'
import { TextArrowBtn } from '../../../../components';
import { icons } from '../../../../libs/icons';

const { ArrowLeftSvg,
    NetWork1Svg,
    Svgexport10Svg,
    Svgexport11Svg,
    Svgexport12Svg,
    Svgexport13Svg,
    Svgexport14Svg,
    Svgexport15Svg,
    Svgexport16Svg,
    Svgexport17Svg,
    Svgexport18Svg,
    Svgexport19Svg,
    Svgexport20Svg,
    Svgexport21Svg,
    Svgexport22Svg,
    Svgexport8Svg,
    Svgexport9Svg
} = icons;

interface Props {
    isVisible: boolean
}

const imageUrl = 'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmbg6s6UhpEdqAJhvDBEFxagCR9TT3nzcep5mBo53XqbLt'

const images = [
    {
        title: 'Defi',
        images: [
            imageUrl,
            'https://ipfs.network.thegraph.com/api/v0/cat?arg=Qmao586HmvZ3ZctgFpC2421u2ykPzLdAT9Z3ywdGyMCpHH',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmQQdjnzdPEY3nuwSvLr3Wgy4gdyAwHE59UqgFsEdKE4ht',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmexXcnTUocqoihRMx8HKA7m59Q3S4A3ZPBqVxWhF5LVoJ'
        ]
    },
    {
        title: 'NFTs',
        images: [
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmaSdMXUU1PWYNxZGZpUG85ce4taMdfibDQgidTNb2jYuJ',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmdSeSQ3APFjLktQY3aNVu3M5QXPfE9ZRK5LqgghRgB7L9',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmcsTC7qnF96RXAtrzitrh9JTwfR9NZ37JwxYAdhYLaFqw',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmXa5Cah5Kjgx6HJtciZK5VjNyAiXUPjvQNv6VkZEwJWth'
        ]
    },
    {
        title: 'DAOs',
        images: [
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmXevwpaKP3QUXXStnS5wQWVwZKS5SeSJ9GFLSKW6QJsbe',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmVJDauaPgh56etnzw89eGFA56wcdBAYixt2wkWfsmCThB',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmU1ZY4j7Bwj3gniHEqWnGwWgHVuhj9PyGywYLN6Gq92bF',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmdSeSQ3APFjLktQY3aNVu3M5QXPfE9ZRK5LqgghRgB7L9'
        ]
    },
    {
        title: 'Analytics',
        images: [
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmTd5VwfHWZvzPVCLKrtroNeU1z6hUUS3KQYsD788te6ES',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmed66AN7gBGLgowVJzDxoTE9EoF4qDLNwM1FrGCH5kYaa',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmetEvHGiCMTorsFnGwXMXrNGaTNGcSSUCvezVZQkJv3Ei',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmYKdvJjH1zetxx5Tw6LC51VkvT1VSNaaMJfLCp31FArHR'
        ]
    },
    {
        title: 'Gaming',
        images: [
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmXgXtC2nTtCZpb2m1PVpepRu5TdTTcZYwVW8sQcnEgWHX',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmcF51LQeaekv7NyJmuZeMYCd7LrRuRwhh6McU6SJ4yfiV',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmZDSm3RDms3s8g6jpueC5RF3fM6FR5qNahaHC9DeAE8km',
            'https://api.thegraph.com/ipfs/api/v0/cat?arg=QmdSeSQ3APFjLktQY3aNVu3M5QXPfE9ZRK5LqgghRgB7L9'
        ]
    },
]


const networks = [
    {
        title: 'Ethereum',
        icon: <Svgexport8Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport9Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport10Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport11Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport12Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport13Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport14Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport15Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport16Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport17Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport18Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport19Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport20Svg />
    },
    {
        title: 'Ethereum',
        icon: <Svgexport21Svg />
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
