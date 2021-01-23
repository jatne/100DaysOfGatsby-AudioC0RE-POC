import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import LocationsNav from './LocationsNav';
import { Flex } from '@chakra-ui/react';

export default function Nav() {
  const { pages } = useStaticQuery(graphql`
    query {
      pages: allContentfulPage {
        nodes {
          id
          title
          slug
        }
      }
    }
  `);

  return (
    <>
      <Flex
        as="nav"
      >
        <Flex
          as="ul"
        >
            {pages.nodes.map(page => (
              <li key={page.id}>
                <Link to={`/${page.slug !== 'home' ? page.slug : ''}`}>{page.title}</Link>
                {page.slug === 'location' ? <LocationsNav /> : ''}
              </li>
            ))}
        </Flex>
      </Flex>
    </>
  );
}
