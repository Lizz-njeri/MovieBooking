'use client'

import { Box, SimpleGrid, Flex, Image, Heading } from '@chakra-ui/react'




export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <Heading fontSize={'4xl'} justify={'center'} color={'purple.400'}>
            Explore available films..
          </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          href={'#'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
        </Flex>
        <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          href={'#'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
        </Flex>
        
      </SimpleGrid>
    </Box>
  )
}