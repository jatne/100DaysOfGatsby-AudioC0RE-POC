import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Home({data}) {
  const {mainContent} = data.contentfulPage;

  return (
    <Layout>
      <Box as="article">
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <StaticImage src="../images/headphones.jpg" alt="Headphones" height={300} layout="fixed"/>
      </Flex>
      <Flex justifyContent="center" p={3}>
        <Box textAlign="center">
          <Heading as="h1" pb={3}>audioC0RE</Heading>
          <Text as="p" maxW="40rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptate quidem, mollitia dicta natus dolorem, ducimus, possimus placeat labore repudiandae harum eveniet iusto distinctio unde soluta accusamus? Consequatur aliquam voluptates perspiciatis exercitationem.</Text>
          <Text as="p" maxW="40rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptate quidem, mollitia dicta natus dolorem, ducimus, possimus placeat labore repudiandae harum eveniet iusto distinctio unde soluta accusamus? Consequatur aliquam voluptates perspiciatis exercitationem.</Text>
        </Box>
      </Flex>
      </Box>
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
