import React, { Fragment, FunctionComponent } from 'react'
import { Helmet } from 'vtex.render-runtime'

// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import favicon from './images/favicon.png'

import { storeComponents, storePixel } from './FeaturesData'

const FeaturesDisplay: FunctionComponent = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Store</title>
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      {/* <Navbar /> */}
      <div>
        nnnnn
      </div>
    </Fragment>
  )
}

export default FeaturesDisplay
