import React from 'react'
import Step1 from "../../../../assets/images/using-subgraph-step-1.png";
import Step3 from "../../../../assets/images/using-subgraph-step-3.png";
import { TextArrowBtn } from '../../../../components';


const UsingSubgraph = () => {
    return (
        <div className='container using-subgraph'>
            <div className='using-subgraph-title'>
                <h2 className='text-center color-white'>How to use a subgraph</h2>
                <p className='text-center text-regular color-secondary'>With The Graph, it’s easy to access blockchain data using subgraphs and GraphQL queries. Join a growing number of trailblazers creating fast, responsive applications with data that loads in milliseconds.</p>
            </div>

            <div className='using-subgraph-box'>

                <div className='box-card'>
                    {/* Title */}
                    <div className='box-card-title'>
                        <p className='step color-secondary'>STEP 1</p>
                        <p style={{ fontWeight: '600' }} className='text-regular color-white'>Discover</p>
                        <p className='text-md color-secondary'>Create a subgraph to organize smart contract data, or use an existing one.</p>
                    </div>

                    {/* Content */}
                    <div className='content-step-1'>
                        <div className='content-step-1-img'>
                            <img src={Step1} alt='step1' />
                        </div>
                        <p className='step-1-btn'>View the subgraph</p>
                    </div>
                </div>
                <div className='devider'></div>

                <div className='box-card box-card-2'>
                    {/* Title */}
                    <div className='box-card-title box-card-title-2'>
                        <p className='step color-secondary'>STEP 2</p>
                        <p style={{ fontWeight: '600' }} className='text-regular color-white'>Query</p>
                        <p className='text-md color-secondary'>Easily access organized data with simple GraphQL queries.</p>
                    </div>

                    {/* content-step-2 */}

                    <div className='content-step-2 '>
                        {`{`}
                        <p>
                            <span>pools</span> {`(`}
                            <span>first: </span>
                            <span>10</span> {`)`}
                        </p>
                        {`}`}

                    </div>
                </div>

                <div className='devider'></div>

                <div className='box-card box-card-2'>
                    {/* Title */}
                    <div className='box-card-title box-card-title-2'>
                        <p className='step color-secondary'>STEP 3</p>
                        <p style={{ fontWeight: '600' }} className='text-regular color-white'>Serve</p>
                        <p className='text-md color-secondary'>Easily access organized data with simple GraphQL queries.</p>
                    </div>

                    {/* Content */}
                    <div className='content-step-1'>
                        <div className='content-step-1-img'>
                            <img src={Step3} alt='step3' />
                        </div>
                        <p className='step-1-btn'>View the subgraph</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsingSubgraph
