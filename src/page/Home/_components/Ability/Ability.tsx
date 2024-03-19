import React from 'react'

const list = [
    {
        id: 1,
        title: 'Build faster',
        subTitle: '100% less servers',
        description: 'Create groundbreaking applications without needing to run your own data server, build indexing infrastructure, or parse through raw data.',
    },
    {
        id: 2,
        title: 'Spend less',
        subTitle: '60-98% less per month',
        description: 'Cut down on costs and time spent running expensive infrastructure by tapping into The Graph’s competitive data market.',
    },
    {
        id: 3,
        title: 'Increase resilience',
        subTitle: '99.99%+ uptime',
        description: 'Ensure your application’s uptime and keep its data flowing 24/7 with a globally distributed network of contributors.',
    },
]

const Ability = () => {
    return (
        <div className='main-container ability'>
            <div className='ability-list'>
                {list.map((item => (
                    <div key={item.id} className='ability-list-item'>
                        <h3>
                            <p className='color-primary'>{item.title}</p>
                            <p className='color-secondary'>{item.subTitle}</p>
                        </h3>

                        <p className='color-secondary text-regular description'>{item.description}</p>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Ability
