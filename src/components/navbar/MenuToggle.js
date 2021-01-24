import React from 'react'
import { Box } from '@chakra-ui/react'

export default function MenuToggle ({isOpen, toggle}) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? '❌' : '🍔'}
    </Box>
  )
}
