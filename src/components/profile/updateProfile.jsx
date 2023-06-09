import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const UpdateProfile = () => {

const[name, setName] = useState("")
const[email, setEmail] = useState("")

  return <Container py={'16'} minH={'90vh'}>
  <form>
    <Heading
      children="Update Profile"
      my={'16'}
      textAlign={['cenetr', 'left']}
      textTransform={'uppercase'}
    />
    <VStack spacing={'8'}>
      <Input
        required
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        type={'text'}
        focusBorderColor={'orange.400'}
      />
      <Input
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        type={'email'}
        focusBorderColor={'orange.400'}
      />

      <Button w={'full'} colorScheme={'orange'} type='submit'>Update</Button>

    </VStack>
  </form>
</Container>
}

export default UpdateProfile
