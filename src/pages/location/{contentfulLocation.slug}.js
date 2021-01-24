import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Img from 'gatsby-image';

export default function Component({data}) {
  const {name, hero} = data.contentfulLocation;

  return (
    <Layout>
      {hero?.fluid && <Img fluid={hero.fluid} />}
      <h1>{name}</h1>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      name
      hero {
        fluid(maxWidth: 1680) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
