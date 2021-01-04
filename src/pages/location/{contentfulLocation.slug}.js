import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

export default function Component(props) {
  const { name } = props.data.contentfulLocation;

  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      name
    }
  }
`
