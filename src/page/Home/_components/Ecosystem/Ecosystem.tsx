import React from 'react'
import Step1 from "../../../../assets/images/using-subgraph-step-1.png";
import Step3 from "../../../../assets/images/using-subgraph-step-3.png";
import { TextArrowBtn } from '../../../../components';


const Ecosystem = () => {
    return (
        <div className='container using-subgraph ecosystem'>
            <div className='using-subgraph-title'>
                <h2 className='text-center color-white'>
                    <span>Globally distributed</span><br />
                    <span className='color-white-48'>Decentralized infrastructure</span>
                </h2>
                <p className='text-center text-regular color-secondary'>What makes The Graph so resilient? Enter The Graph Network, a decentralized data market powered by distributed participants: Indexers, Curators, Delegators, and Subgraph Developers.</p>
            </div>

            {/* content */}

            <div className='ecosystem-map'>
                ecosystem
            </div>

        </div>
    )
}

export default Ecosystem
