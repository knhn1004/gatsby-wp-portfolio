const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPernament: true,
  })

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
            title
            content
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            slug
            title
            content
            excerpt
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressWpPortfolio } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const portfolioUnderContentTemplate = path.resolve(
    `./src/templates/portfolioUnderContent.js`
  )

  allWordpressPage.edges.forEach(edge => {
    const { path, template, ...pageContext } = edge.node

    createPage({
      path: edge.node.path,
      component: slash(
        template === "portfolio_under_content.php"
          ? portfolioUnderContentTemplate
          : pageTemplate
      ),
      context: pageContext,
    })
  })

  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)
  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: slash(portfolioTemplate),
      context: edge.node,
    })
  })
}
