import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'

const portfolioUnderContent = ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <PortfolioItems />
    </Layout>
  )
}

export default portfolioUnderContent
