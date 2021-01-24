import React from 'react';
import {
  Box,
  Link,
} from '@chakra-ui/react';
import { Link as GatbsyLink } from 'gatsby';

export default function Logo (props) {
  return (
    <Box {...props}>
      <Link
      to="/"
      as={GatbsyLink}
      fontSize="lg"
      fontWeight="bold">
        audio-c0re
      </Link>
    </Box>
  )
}
