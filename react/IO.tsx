import React, { Fragment, FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'

import favicon from './images/favicon.png'

const Landing: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{intl.formatMessage({ id: 'io.page-title' })}</title>
        <meta
          name="description"
          content="A serverless development platform from VTEX."
        />
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <main>xxx</main>
    </Fragment>
  )
}

export default injectIntl(Landing)
