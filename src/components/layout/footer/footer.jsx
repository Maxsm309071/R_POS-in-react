import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
  <Box padding='4' bg={'blackAlpha.900'} h={'10vh'}>

  <Stack direction={["column" , "row"]}>
    <VStack alignItems={["center", "flex-start"]} width="full">

    <Heading size={'sm'} fontFamily={'body'} children="All Rights Reserved" color={'white'}/>
    <Heading  fontFamily={'body'} size={'sm'} children="@MayankPatel" color={'orange.400'}/>

    </VStack>

<HStack spacing={["2","10"]}justifyContent="center" />

  </Stack>

  </Box>
  )
}

export default Footer
