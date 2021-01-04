import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Nav() {
  const { locations } = useStaticQuery(graphql`
    query {
      locations: allContentfulLocation {
        nodes {
          name
          slug
        }
      }
    }
  `);

  console.log(locations);

  return (
    <>NAV</>
  );
}
