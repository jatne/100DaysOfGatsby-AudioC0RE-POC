import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { renderRichText } from "gatsby-source-contentful/rich-text"

export default function Home(props) {
  const {mainContent} = props.data.contentfulPage;

  return (
    <Layout>
      {mainContent ? renderRichText(mainContent) : ''}
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "home" }) {
      title
      mainContent {
        raw
      }
    }
  }
`
