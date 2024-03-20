import React from 'react'

const navs = {
  listNav: [
    {
      label: 'Home'
    },
    {
      label: 'Blog'
    },
    {
      label: 'Jobs'
    },
    {
      label: 'Docs'
    },
    {
      label: 'Past Events'
    },
  ],
  listNav2: [
    {
      label: 'Testnet'
    },
    {
      label: 'Privacy Policy'
    },
    {
      label: 'Terms of Service'
    },
    {
      label: 'Brand Assets'
    },
    {
      label: 'Partnership Requests'
    },
    {
      label: 'Forum'
    },
    {
      label: 'Security'
    },
  ]
}

const Footer = () => {
  return (
    <footer>
      <div className='footer'>

        {/* Input */}

        {/* Nav */}

        <div className='footer-nav'>
          <ul className='footer-nav-1'>
            {navs.listNav.map((item, i) => (
              <li key={i}>
                <p className='color-primary text-md-16'>{item.label}</p>
              </li>
            ))}
          </ul>

          <ul className='footer-nav-2'>
            {navs.listNav2.map((item, i) => (
              <li key={i}>
                <p className='color-white-48 text-small'>{item.label}</p>
              </li>
            ))}
          </ul>


        </div>

        {/*Icons */}

      </div>
    </footer>
  )
}

export default Footer