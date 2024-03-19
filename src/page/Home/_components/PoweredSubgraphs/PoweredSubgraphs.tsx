import React, { FC } from 'react'
import { TextArrowBtn } from '../../../../components'
interface Props {
    isVisible: boolean
}

const PoweredSubgraphs: FC<Props> = ({ isVisible }) => {

    return (
        <div className='main-container powered-subgraphs'>
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
                <div >

                </div>
            </div>


            {/* Supported Networks */}
            <div className='powered-subgraphs-network'>
                <h3 className=' color-white'>Supported Networks</h3>
                <p className='text-regular color-secondary '>Anyone can use subgraphs to power applications across 40+ networks and counting.</p>
                <ul>
                    <li>
                        <span></span>
                    </li>
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
