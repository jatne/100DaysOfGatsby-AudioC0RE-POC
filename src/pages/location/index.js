import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import LocationsNav from '../../components/LocationsNav';
import { renderRichText } from "gatsby-source-contentful/rich-text"


export default function Location({data}) {
  const {mainContent} = data.contentfulPage;

  return (
    <Layout>
      {mainContent ? renderRichText(mainContent) : ''}
      <LocationsNav />
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "location" }) {
      title
      mainContent {
        raw
      }
    }
  }
`
