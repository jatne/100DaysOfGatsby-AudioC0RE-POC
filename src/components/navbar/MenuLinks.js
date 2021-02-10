import { Box, Stack, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';

export default function MenuLinks ({isOpen}) {
  const { menu } = useStaticQuery(graphql`
    query {
      locations: allContentfulLocation {
        nodes {
          id
          name
          slug
        }
      }
      menu: contentfulMenu(menuName: {eq: "Primary"}) {
        pages {
          slug
          title
        }
      }
    }
  `);



  const MenuLink = () => menu.pages.map(page => (
    <ListItem className="top-menu">
      <Link
        as={GatsbyLink}
        to={`/${page.slug !== 'home' ? page.slug : ''}`}
        >
          {page.title}
      </Link>
    </ListItem>
  ));


  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        as={UnorderedList}
        styleType="none"
      >
        <MenuLink />
      </Stack>
    </Box>
  )
}
