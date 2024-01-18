'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url(https://res.cloudinary.com/dnsmax0s7/image/upload/v1705398355/pexels-tima-miroshnichenko-7991579_rw1irv.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
           Explore the movies available and book the ones to watch.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.500'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'purple.300' }}>
              Explore more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}