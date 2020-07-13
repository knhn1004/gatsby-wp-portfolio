import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

const post = ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <FeaturedImage src={pageContext.featured_media.source_url}/>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
  )
}

export default post
