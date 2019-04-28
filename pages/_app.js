import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import Layout from '../components/Layout'
import ValidateTextile from '../components/wrappers/ValidateTextile'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Head>
          <title>Open Work Labs</title>
        </Head>
        <Provider store={reduxStore}>
          <Layout>
            <ValidateTextile>
              <Component {...pageProps} />
            </ValidateTextile>
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
