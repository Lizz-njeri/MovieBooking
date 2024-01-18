'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'purple.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'black'}
                color={'purple.400'}
                _hover={{
                  bg: 'purple.500',
                }}>
                Login
              </Button>
              <Text align={'center'}>
                OR </Text>
                <Button
                bg={'purple.300'}
                color={'black'}
                _hover={{
                  bg: 'purple.400',
                }}>
                Login with google
              </Button>
              <Stack pt={6}>
              <Text align={'center'}>
                Don't have an account? <Link color={'purple.400'} href={'/signup'}>Signup</Link>
              </Text>
            </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}