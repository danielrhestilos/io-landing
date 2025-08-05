import React, { Fragment, FunctionComponent } from 'react'
import { Helmet } from 'vtex.render-runtime'
import favicon from './images/favicon.png'

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
