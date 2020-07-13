import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: auto 0;
`

const SiteTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5em;
`

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteTitle
          dangerouslySetInnerHTML={{
            __html: props.allWordpressSiteMetadata.edges[0].node.name,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: props.allWordpressSiteMetadata.edges[0].node.description,
          }}
        />
      </SiteInfoWrapper>
    )}
  />
)

export default SiteInfo
