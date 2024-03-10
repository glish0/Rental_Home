'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import { useState } from 'react';


const Page = () => {
  const [searcFilters, setSearchFilters] = useState<boolean>(false)
  const router = useRouter()
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
      >

      </Flex>
    </Box>
  )
}

export default Page
