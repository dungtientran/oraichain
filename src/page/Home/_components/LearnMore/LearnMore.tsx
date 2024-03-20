import React, { FC, useEffect, useRef, useState } from 'react'

interface Props {
    isVisible: boolean
}

const list = [
    {
        id: 1,
        title: 'Blog',
        attributes: [
            {
                title: 'Intro to web3 and The Graph',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-intro-to-web3.72ed0790.jpg',
                description: 'The Graph Foundation',
                createdAt: '6 minute read'
            },
            {
                title: 'The Graph Network In Depth',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-graph-network.68d5832b.jpg',
                description: 'Brandon Ramirez',
                createdAt: '6 minute read'
            },
            {
                title: 'Intro to web3 and The Graph',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-roadmap.2859254d.jpg',
                description: 'The Graph Foundation',
                createdAt: '6 minute read'
            },
        ]
    },
    {
        id: 2,
        title: 'Docs',
        attributes: [
            {
                title: 'About The Graph',
                imageUrl: 'https://thegraph.com/_next/static/media/docs-about.517a464b.svg',
                description: '',
                createdAt: '6 minute read'
            },
            {
                title: 'Subgraph Quick Start',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-graph-network.68d5832b.jpg',
                description: '',
                createdAt: '6 minute read'
            },
            {
                title: 'Intro to web3 and The Graph',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-roadmap.2859254d.jpg',
                description: 'The Graph Foundation',
                createdAt: '6 minute read'
            },
        ]
    },
    {
        id: 3,
        title: 'VIDEOS',
        attributes: [
            {
                title: 'Intro to web3 and The Graph',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-intro-to-web3.72ed0790.jpg',
                description: 'The Graph Foundation',
                createdAt: '6 minute read'
            },
            {
                title: 'Intro to web3 and The Graph',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-intro-to-web3.72ed0790.jpg',
                description: 'The Graph Foundation',
                createdAt: '6 minute read'
            },
            {
                title: 'Intro to web3 and The Graph',
                imageUrl: 'https://thegraph.com/_next/static/media/blog-intro-to-web3.72ed0790.jpg',
                description: 'The Graph Foundation',
                createdAt: '6 minute read'
            },
        ]
    },

]



const LearnMore: FC<Props> = ({ isVisible }) => {

    return (
        <div className='main-container learn-more'>
            {/* Title */}
            <div className='learn-more-title'>
                <h2>Learn more</h2>
                <p className='color-white-64 text-regular'>The Graph enables innovators of all backgrounds to plug into a collaborative ecosystem. Learn more about how The Graph community can serve you.</p>
            </div>

            {/* List */}

            <div className='learn-more-list'>
                {list.map((item, i) => (
                    <div key={i} className='learn-more-list-item'>
                        {/* title */}
                        <h3 className='title color-white'>{item.title}</h3>

                        {/* List Cart */}
                        <div className='list'>
                            {item.attributes.map((attribute, j) => (
                                <div key={i} className='list-item'>
                                    <div className='list-image'>
                                        <img src={attribute.imageUrl} alt="items" />
                                    </div>

                                    <div>
                                        <span className='title'>{attribute.title}</span>

                                        <div className='description text-small-12 color-white-48'>
                                            <span>{attribute.description}</span>
                                            <span className='dot' />
                                            <span>{attribute.createdAt}</span>
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default LearnMore
